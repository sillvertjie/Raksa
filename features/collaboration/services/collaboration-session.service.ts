import type { CollaborationSessionRepository } from "../contracts/collaboration-session-repository.interface";
import type { CollaborationSessionService } from "../contracts/collaboration-session-service.interface";
import type { CreateCollaborationSessionDto } from "../dto/create-collaboration-session.dto";
import type { CollaborationSession } from "../entities/collaboration-session.entity";

import { CollaborationSessionValidator } from "../validators/collaboration-session.validator";

export class DefaultCollaborationSessionService
  implements CollaborationSessionService
{
  constructor(
    private readonly repository: CollaborationSessionRepository,
  ) {}

  async create(
    dto: CreateCollaborationSessionDto,
  ): Promise<CollaborationSession> {
    CollaborationSessionValidator.validateCreate(dto);

    const now = new Date();

    const session: CollaborationSession = {
      id: crypto.randomUUID(),
      workspaceId: dto.workspaceId,
      startedBy: dto.startedBy,
      status: "CREATED",
      endedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.create(session);
  }

  async end(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(
    id: string,
  ): Promise<CollaborationSession | null> {
    return this.repository.findById(id);
  }

  async getByWorkspace(
    workspaceId: string,
  ): Promise<CollaborationSession[]> {
    return this.repository.findByWorkspace(workspaceId);
  }
}