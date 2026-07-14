import type { TaskPriority, TaskStatus } from "../entities/task.entity";

export interface TaskAIContext {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string | null;
  createdAt: Date;
  updatedAt: Date;
}