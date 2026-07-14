import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { Task } from "../entities/task.entity";

import type { TaskAIBridge } from "./task-ai.bridge.interface";
import type { TaskAIRequest } from "./task-ai-request";
import type { TaskAIResponse } from "./task-ai-response";
import { toTaskAIContext } from "./task-ai-context.mapper";

export class DefaultTaskAIBridge implements TaskAIBridge {
  constructor(
    private readonly aiService: AIService,
  ) {}

  async handle(
    task: Task,
    request: TaskAIRequest,
  ): Promise<TaskAIResponse> {
    const context =
      toTaskAIContext(task);

    const aiResponse =
      await this.aiService.execute({
        message: this.createAIMessage(request),
        options: {
          taskContext: context,
          intent: request.intent,
        },
      });

    return {
      content: aiResponse.message,
    };
  }

  private createAIMessage(
    request: TaskAIRequest,
  ): string {
    switch (request.intent) {
      case "ASK_TASK":
        return request.message;

      case "SUMMARIZE_TASK":
        return "Summarize this task.";

      case "GENERATE_TASK_DESCRIPTION":
        return request.instruction;
    }
  }
}