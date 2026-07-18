import type { PresenceRepository } from "../contracts/presence-repository.interface";
import type { PresenceSession } from "../entities/presence-session.entity";

export class PresenceService {
  constructor(
    private readonly repository: PresenceRepository,
  ) {}

  async setOnline(
    presence: PresenceSession,
  ): Promise<PresenceSession> {
    return this.repository.save({
      ...presence,
      status: "ONLINE",
      lastSeenAt: new Date(),
    });
  }

  async setOffline(
    id: string,
  ): Promise<void> {
    const existing =
      await this.repository.findById(id);

    if (!existing) {
      return;
    }

    await this.repository.save({
      ...existing,
      status: "OFFLINE",
      lastSeenAt: new Date(),
    });
  }

  async getWorkspacePresence(
    workspaceId: string,
  ): Promise<PresenceSession[]> {
    return this.repository.findByWorkspaceId(
      workspaceId,
    );
  }
}