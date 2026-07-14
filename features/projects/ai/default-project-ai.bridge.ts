import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { Project } from "../entities/project.entity";

import type { ProjectAIBridge } from "./project-ai.bridge.interface";
import type { ProjectAIRequest } from "./project-ai-request";
import type { ProjectAIResponse } from "./project-ai-response";
import { toProjectAIContext } from "./project-ai-context.mapper";

export class DefaultProjectAIBridge implements ProjectAIBridge {
  constructor(
    private readonly aiService: AIService,
  ) {}

  async handle(
    project: Project,
    request: ProjectAIRequest,
  ): Promise<ProjectAIResponse> {
    const context =
      toProjectAIContext(project);

    const aiResponse =
      await this.aiService.execute({
        message: this.createAIMessage(request),
        options: {
          projectContext: context,
          intent: request.intent,
        },
      });

    return {
      content: aiResponse.message,
    };
  }

  private createAIMessage(
    request: ProjectAIRequest,
  ): string {
    switch (request.intent) {
      case "ASK_PROJECT":
        return request.message;

      case "SUMMARIZE_PROJECT":
        return "Summarize this project.";

      case "GENERATE_PROJECT_DESCRIPTION":
        return request.instruction;
    }
  }
}