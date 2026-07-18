import type { EventBus } from "@/features/shared/contracts/event-bus.interface";

import type { RealtimeDistributor } from "../contracts/realtime-distributor.interface";

export function registerRealtimeEventListeners(
  eventBus: EventBus,
  distributor: RealtimeDistributor,
): void {
  eventBus.subscribe(
    "presence.online",
    async (event) => {
      await distributor.distribute(event);
    },
  );

  eventBus.subscribe(
    "presence.offline",
    async (event) => {
      await distributor.distribute(event);
    },
  );
}