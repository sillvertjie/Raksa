import type { Project } from "../entities/project.entity";

import type { ProjectAIRequest } from "./project-ai-request";
import type { ProjectAIResponse } from "./project-ai-response";

export interface ProjectAIBridge {
  handle(
    project: Project,
    request: ProjectAIRequest,
  ): Promise<ProjectAIResponse>;
}