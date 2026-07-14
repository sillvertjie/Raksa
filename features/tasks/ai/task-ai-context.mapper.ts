import type { Task } from "../entities/task.entity";
import type { TaskAIContext } from "./task-ai-context";

export function toTaskAIContext(
  task: Task,
): TaskAIContext {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    projectId: task.projectId,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
}