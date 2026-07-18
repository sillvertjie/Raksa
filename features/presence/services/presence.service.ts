import type { EventBus } from "@/features/shared/contracts/event-bus.interface";

import type { PresenceRepository } from "../contracts/presence-repository.interface";
import type { PresenceSession } from "../entities/presence-session.entity";

import { PresenceOfflineEvent } from "../events/presence-offline.event";
import { PresenceOnlineEvent } from "../events/presence-online.event";

export class PresenceService {
  constructor(
    private readonly repository: PresenceRepository,
    private readonly eventBus: EventBus,
  ) {}

  async setOnline(
    presence: PresenceSession,
  ): Promise<PresenceSession> {
    const updated =
      await this.repository.save({
        ...presence,
        status: "ONLINE",
        lastSeenAt: new Date(),
      });

    await this.eventBus.publish(
      new PresenceOnlineEvent({
        presenceId: updated.id,
      }),
    );

    return updated;
  }

  async setOffline(
    id: string,
  ): Promise<void> {
    const existing =
      await this.repository.findById(id);

    if (!existing) {
      return;
    }

    const updated =
      await this.repository.save({
        ...existing,
        status: "OFFLINE",
        lastSeenAt: new Date(),
      });

    await this.eventBus.publish(
      new PresenceOfflineEvent({
        presenceId: updated.id,
      }),
    );
  }

  async getWorkspacePresence(
    workspaceId: string,
  ): Promise<PresenceSession[]> {
    return this.repository.findByWorkspaceId(
      workspaceId,
    );
  }
}