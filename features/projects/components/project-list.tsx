import type { ProjectResponse } from "../api/projects.api";

import { ProjectCard } from "./project-card";

type Props = {
  projects: ProjectResponse[];
};

export function ProjectList({
  projects,
}: Props) {
  if (projects.length === 0) {
    return (
      <p>
        No projects found.
      </p>
    );
  }

  return (
    <section className="grid gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}