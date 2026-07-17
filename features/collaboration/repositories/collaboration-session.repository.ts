import type { CollaborationSessionRepository } from "../contracts/collaboration-session-repository.interface";
import type { CollaborationSession } from "../entities/collaboration-session.entity";

export class InMemoryCollaborationSessionRepository
  implements CollaborationSessionRepository
{
  private readonly sessions = new Map<
    string,
    CollaborationSession
  >();

  async create(
    session: CollaborationSession,
  ): Promise<CollaborationSession> {
    this.sessions.set(
      session.id,
      session,
    );

    return session;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.sessions.delete(id);
  }

  async findById(
    id: string,
  ): Promise<CollaborationSession | null> {
    return this.sessions.get(id) ?? null;
  }

  async findByWorkspace(
    workspaceId: string,
  ): Promise<CollaborationSession[]> {
    return [
      ...this.sessions.values(),
    ].filter(
      (session) =>
        session.workspaceId === workspaceId,
    );
  }
}