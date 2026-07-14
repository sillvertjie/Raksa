import type { Task } from "@/features/tasks/entities/task.entity";

export interface SearchSourceReader {
  getTask(
    id: string,
  ): Promise<Task | null>;
}