import type { CreateCollaborationSessionDto } from "../dto/create-collaboration-session.dto";
import type { CollaborationSession } from "../entities/collaboration-session.entity";

export interface CollaborationSessionService {
  create(
    dto: CreateCollaborationSessionDto,
  ): Promise<CollaborationSession>;

  end(
    id: string,
  ): Promise<void>;

  getById(
    id: string,
  ): Promise<CollaborationSession | null>;

  getByWorkspace(
    workspaceId: string,
  ): Promise<CollaborationSession[]>;
}