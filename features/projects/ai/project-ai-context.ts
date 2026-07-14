import { ProjectStatus } from "../entities/project.entity";

export interface ProjectAIContext {
  id: string;
  title: string;
  description: string | null;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}