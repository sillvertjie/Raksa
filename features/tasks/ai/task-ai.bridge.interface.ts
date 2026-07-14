import type { Task } from "../entities/task.entity";

import type { TaskAIRequest } from "./task-ai-request";
import type { TaskAIResponse } from "./task-ai-response";

export interface TaskAIBridge {
  handle(
    task: Task,
    request: TaskAIRequest,
  ): Promise<TaskAIResponse>;
}