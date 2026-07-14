import { ProjectAIContext } from "./project-ai-context";
import type { Project } from "../entities/project.entity";

export function toProjectAIContext(
  project: Project
): ProjectAIContext {
  return {
    id: project.id,
    title: project.name,
    description: project.description,
    status: project.status,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  };
}