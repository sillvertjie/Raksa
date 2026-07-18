import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";
import type { Project } from "../entities/project.entity";

export interface ProjectService {
  create(
    workspaceId: string,
    dto: CreateProjectDto,
  ): Promise<Project>;

  update(
    workspaceId: string,
    id: string,
    dto: UpdateProjectDto,
  ): Promise<Project>;

  delete(
    workspaceId: string,
    id: string,
  ): Promise<void>;

  getById(
    workspaceId: string,
    id: string,
  ): Promise<Project | null>;

  getAll(
    workspaceId: string,
  ): Promise<Project[]>;
}