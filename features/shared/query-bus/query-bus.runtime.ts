import { InMemoryQueryBus } from "./in-memory-query-bus";

declare global {
  var raksaQueryBus:
    | InMemoryQueryBus
    | undefined;
}

export function getQueryBus() {
  if (!global.raksaQueryBus) {
    global.raksaQueryBus =
      new InMemoryQueryBus();
  }

  return global.raksaQueryBus;
}