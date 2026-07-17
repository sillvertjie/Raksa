import type { CollaborationSession } from "../entities/collaboration-session.entity";

export interface CollaborationSessionRepository {
  create(
    session: CollaborationSession,
  ): Promise<CollaborationSession>;

  delete(
    id: string,
  ): Promise<void>;

  findById(
    id: string,
  ): Promise<CollaborationSession | null>;

  findByWorkspace(
    workspaceId: string,
  ): Promise<CollaborationSession[]>;
}