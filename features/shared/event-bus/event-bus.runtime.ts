import { InMemoryEventBus } from "./in-memory-event-bus";

declare global {
  var raksaEventBus:
    | InMemoryEventBus
    | undefined;
}

export function getEventBus() {
  if (!global.raksaEventBus) {
    global.raksaEventBus =
      new InMemoryEventBus();
  }

  return global.raksaEventBus;
}