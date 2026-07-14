"use client";

import { use } from "react";

import { useProject } from "@/features/projects/hooks/useProject";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProjectDetailPage({
  params,
}: Props) {
  const { id } = use(params);

  const {
    project,
    loading,
  } = useProject({
    id,
  });

  if (loading) {
    return (
      <main className="p-6">
        Loading project...
      </main>
    );
  }

  if (!project) {
    return (
      <main className="p-6">
        Project not found.
      </main>
    );
  }

  return (
    <main className="space-y-4 p-6">
      <header>
        <h1 className="text-2xl font-bold">
          {project.name}
        </h1>

        <p className="text-sm text-gray-600">
          {project.description ??
            "No description"}
        </p>
      </header>

      <section className="rounded-lg border p-4">
        <p>
          Status: {project.status}
        </p>

        <p>
          Created:
          {" "}
          {new Date(
            project.createdAt,
          ).toLocaleDateString()}
        </p>
      </section>
    </main>
  );
}