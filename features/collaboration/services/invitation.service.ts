import type { InvitationRepository } from "../contracts/invitation-repository.interface";
import type { InvitationService } from "../contracts/invitation-service.interface";
import type { CreateInvitationDto } from "../dto/create-invitation.dto";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { validateCreateInvitation } from "../validators/invitation.validator";

export class DefaultInvitationService
  implements InvitationService
{
  constructor(
    private readonly repository: InvitationRepository,
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

    return this.repository.create(invitation);
  }

  async accept(
    token: string,
  ): Promise<WorkspaceInvitation> {
    const invitation = await this.repository.findByToken(token);

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

    return this.repository.update(accepted);
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