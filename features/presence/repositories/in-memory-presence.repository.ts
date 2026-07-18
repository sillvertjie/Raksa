import type { PresenceRepository } from "../contracts/presence-repository.interface";
import type { PresenceSession } from "../entities/presence-session.entity";

export class InMemoryPresenceRepository
  implements PresenceRepository
{
  private readonly presences = new Map<
    string,
    PresenceSession
  >();

  async save(
    presence: PresenceSession,
  ): Promise<PresenceSession> {
    this.presences.set(
      presence.id,
      presence,
    );

    return presence;
  }

  async findById(
    id: string,
  ): Promise<PresenceSession | null> {
    return this.presences.get(id) ?? null;
  }

  async findByWorkspaceId(
    workspaceId: string,
  ): Promise<PresenceSession[]> {
    return Array.from(
      this.presences.values(),
    ).filter(
      (presence) =>
        presence.workspaceId === workspaceId,
    );
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.presences.delete(id);
  }
}