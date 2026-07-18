import { apiFetch } from "@/lib/api/client";

export type ActivityTimelineItem = {
  id: string;
  entityType: string;
  entityId: string;
  eventName: string;
  summary: string;
  occurredAt: string;
  metadata: Record<string, unknown>;
};

export const activityApi = {
  async getTimeline(): Promise<ActivityTimelineItem[]> {
    return apiFetch<ActivityTimelineItem[]>(
      "/api/activity",
      {
        method: "GET",
      },
    );
  },
};