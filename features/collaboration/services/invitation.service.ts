import type { EventBus } from "../../shared/contracts/event-bus.interface";
import type { InvitationRepository } from "../contracts/invitation-repository.interface";
import type { InvitationService } from "../contracts/invitation-service.interface";
import type { CreateInvitationDto } from "../dto/create-invitation.dto";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { InvitationAcceptedEvent } from "../events/invitation-accepted.event";
import { InvitationSentEvent } from "../events/invitation-sent.event";
import { validateCreateInvitation } from "../validators/invitation.validator";

export class DefaultInvitationService
  implements InvitationService
{
  constructor(
    private readonly repository: InvitationRepository,
    private readonly eventBus: EventBus,
  ) {}

  async create(
    dto: CreateInvitationDto,
  ): Promise<WorkspaceInvitation> {
    validateCreateInvitation(dto);

    const now = new Date();

    const invitation: WorkspaceInvitation = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,

      workspaceId: dto.workspaceId,
      email: dto.email.trim(),
      role: dto.role,

      token: crypto.randomUUID(),
      status: "PENDING",
      expiresAt: dto.expiresAt,
    };

    const created =
      await this.repository.create(invitation);

    this.eventBus.publish(
      new InvitationSentEvent({
        invitationId: created.id,
      }),
    );

    return created;
  }

  async accept(
    token: string,
  ): Promise<WorkspaceInvitation> {
    const invitation =
      await this.repository.findByToken(token);

    if (!invitation) {
      throw new Error("Invitation not found.");
    }

    if (invitation.status !== "PENDING") {
      throw new Error("Invitation is no longer valid.");
    }

    if (invitation.expiresAt.getTime() <= Date.now()) {
      throw new Error("Invitation has expired.");
    }

    const accepted: WorkspaceInvitation = {
      ...invitation,
      status: "ACCEPTED",
      updatedAt: new Date(),
    };

    const updated =
      await this.repository.update(accepted);

    this.eventBus.publish(
      new InvitationAcceptedEvent({
        invitationId: updated.id,
      }),
    );

    return updated;
  }

  async revoke(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(
    id: string,
  ): Promise<WorkspaceInvitation | null> {
    return this.repository.findById(id);
  }

  async listWorkspaceInvitations(
    workspaceId: string,
  ): Promise<WorkspaceInvitation[]> {
    return this.repository.findByWorkspace(workspaceId);
  }
}