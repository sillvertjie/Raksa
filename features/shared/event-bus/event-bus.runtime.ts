import type { EventBus } from "../contracts/event-bus.interface";
import { InMemoryEventBus } from "./in-memory-event-bus";

declare global {
  var raksaEventBus:
    | EventBus
    | undefined;
}

export function getEventBus(): EventBus {
  if (!global.raksaEventBus) {
    global.raksaEventBus =
      new InMemoryEventBus();
  }

  return global.raksaEventBus;
}