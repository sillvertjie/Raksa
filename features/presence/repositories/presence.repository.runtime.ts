import { InMemoryPresenceRepository } from "./in-memory-presence.repository";

declare global {
  var raksaPresenceRepository:
    | InMemoryPresenceRepository
    | undefined;
}

export function getPresenceRepository() {
  if (!global.raksaPresenceRepository) {
    global.raksaPresenceRepository =
      new InMemoryPresenceRepository();
  }

  return global.raksaPresenceRepository;
}