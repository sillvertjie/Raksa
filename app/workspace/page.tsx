"use client";

import { ActivityTimeline } from "@/features/activity/components/activity-timeline";
import { PresenceList } from "@/features/presence/components/presence-list";
import { WorkspaceList } from "@/features/workspace/components/workspace-list";
import { useWorkspace } from "@/features/workspace/hooks/useWorkspace";

export default function WorkspacePage() {
  const {
    items,
    loading,
  } = useWorkspace();

  if (loading) {
    return (
      <p>
        Loading workspace...
      </p>
    );
  }

  return (
    <main className="space-y-6 p-6">
      <section>
        <h1 className="text-2xl font-bold">
          Workspace
        </h1>

        <p className="text-sm text-gray-500">
          Aggregated workspace view.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Team Presence
        </h2>

        <PresenceList />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Workspace Items
        </h2>

        <WorkspaceList
          items={items}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Activity Timeline
        </h2>

        <ActivityTimeline />
      </section>
    </main>
  );
}