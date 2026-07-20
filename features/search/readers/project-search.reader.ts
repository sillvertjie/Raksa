import type { Project } from "@/features/projects/entities/project.entity";

interface ProjectLookup {
  findById(
    id: string,
  ): Promise<Project | null>;
}

export class ProjectSearchReader {
  constructor(
    private readonly repository: ProjectLookup,
  ) {}

  async getProject(
    id: string,
  ): Promise<Project | null> {
    return this.repository.findById(id);
  }
}