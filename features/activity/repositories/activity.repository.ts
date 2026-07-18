import type { ActivityRepository } from "../contracts/activity-repository.interface";
import type { ActivityEntry } from "../entities/activity-entry.entity";

export class InMemoryActivityRepository
  implements ActivityRepository
{
  private readonly activities = new Map<
    string,
    ActivityEntry
  >();

  async append(
    activity: ActivityEntry,
  ): Promise<ActivityEntry> {
    this.activities.set(
      activity.id,
      activity,
    );

    return activity;
  }

  async findAll(
    workspaceId: string,
  ): Promise<ActivityEntry[]> {
    return [
      ...this.activities.values(),
    ].filter(
      (activity) =>
        activity.workspaceId === workspaceId,
    );
  }
}