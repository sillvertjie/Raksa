import Link from "next/link";

import type { ProjectResponse } from "../api/projects.api";

type Props = {
  project: ProjectResponse;
};

export function ProjectCard({
  project,
}: Props) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block"
    >
      <article className="rounded-lg border p-4">
        <h3 className="font-semibold">
          {project.name}
        </h3>

        <p className="text-sm text-gray-600">
          {project.description ??
            "No description"}
        </p>

        <span className="text-xs">
          {project.status}
        </span>
      </article>
    </Link>
  );
}