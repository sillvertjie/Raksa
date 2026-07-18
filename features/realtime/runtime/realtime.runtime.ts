import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";

import { WebSocketRealtimeAdapter } from "../adapters/websocket-realtime.adapter";
import { registerRealtimeEventListeners } from "../bootstrap/realtime.bootstrap";
import { RealtimeEventDistributor } from "../distributors/realtime-event-distributor";

let initialized = false;

export function initializeRealtimeRuntime(): void {
  if (initialized) {
    return;
  }

  const eventBus = getEventBus();

  const adapter =
    new WebSocketRealtimeAdapter();

  const distributor =
    new RealtimeEventDistributor(
      adapter,
    );

  registerRealtimeEventListeners(
    eventBus,
    distributor,
  );

  initialized = true;
}