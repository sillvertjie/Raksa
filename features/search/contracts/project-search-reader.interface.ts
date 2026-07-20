import type { Project } from "@/features/projects/entities/project.entity";

export interface ProjectSearchReaderContract {
  getProject(
    id: string,
  ): Promise<Project | null>;
}