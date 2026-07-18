import type { Project } from "../entities/project.entity";

export interface ProjectRepository {
  create(project: Project): Promise<Project>;

  update(project: Project): Promise<Project>;

  delete(id: string): Promise<void>;

  findById(
    workspaceId: string,
    id: string,
  ): Promise<Project | null>;

  findAll(
    workspaceId: string,
  ): Promise<Project[]>;
}