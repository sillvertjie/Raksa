import type { Task } from "@/features/tasks/entities/task.entity";

export interface TaskSearchReaderContract {
  getTask(
    id: string,
  ): Promise<Task | null>;
}