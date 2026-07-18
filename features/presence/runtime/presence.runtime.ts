import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";

import { getPresenceRepository } from "../repositories/presence.repository.runtime";
import { PresenceService } from "../services/presence.service";

declare global {
  var raksaPresenceService:
    | PresenceService
    | undefined;
}

export function getPresenceService() {
  if (!global.raksaPresenceService) {
    global.raksaPresenceService =
      new PresenceService(
        getPresenceRepository(),
        getEventBus(),
      );
  }

  return global.raksaPresenceService;
}