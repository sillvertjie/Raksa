"use client";

import { useWorkspace } from "@/features/workspace/hooks/useWorkspace";

import { WorkspaceList } from "@/features/workspace/components/workspace-list";


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


      <WorkspaceList
        items={items}
      />
    </main>
  );
}