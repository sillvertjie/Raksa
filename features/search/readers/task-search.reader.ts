import type { SearchSourceReader } from "../contracts/search-source-reader.interface";

import type { TaskRepository } from "@/features/tasks/contracts/task-repository.interface";

import type { Task } from "@/features/tasks/entities/task.entity";

export class TaskSearchReader
  implements SearchSourceReader
{
  constructor(
    private readonly repository: TaskRepository,
  ) {}

  async getTask(
    id: string,
  ): Promise<Task | null> {
    return this.repository.findById(id);
  }
}