import type { DomainEvent } from "../../shared/contracts/domain-event.interface";
import type { ActivityEntry } from "../entities/activity-entry.entity";

export interface ActivityProjectionService {
  project(
    event: DomainEvent,
  ): Promise<ActivityEntry>;
}