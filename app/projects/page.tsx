"use client";

import { ProjectCreateForm } from "@/features/projects/components/project-create-form";
import { ProjectList } from "@/features/projects/components/project-list";
import { useProjects } from "@/features/projects/hooks/useProjects";

export default function ProjectsPage() {
  const {
    projects,
    loading,
    createProject,
  } = useProjects();

  if (loading) {
    return (
      <main className="p-6">
        Loading projects...
      </main>
    );
  }

  return (
    <main className="space-y-6 p-6">
      <header>
        <h1 className="text-2xl font-bold">
          Projects
        </h1>

        <p className="text-sm text-gray-600">
          Manage your workspace projects.
        </p>
      </header>

      <ProjectCreateForm
        onSubmit={async (dto) => {
          await createProject(dto);
        }}
      />

      <ProjectList
        projects={projects}
      />
    </main>
  );
}