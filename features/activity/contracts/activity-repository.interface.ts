import type { ActivityEntry } from "../entities/activity-entry.entity";

export interface ActivityRepository {
  append(
    activity: ActivityEntry,
  ): Promise<ActivityEntry>;

  findAll(
    workspaceId: string,
  ): Promise<ActivityEntry[]>;
}