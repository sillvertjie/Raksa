import type { ProjectStatus } from "../entities/project.entity";

export interface UpdateProjectDto {
  name?: string;
  description?: string | null;
  status?: ProjectStatus;
}