import type { TaskSearchReaderContract }
from "../contracts/task-search-reader.interface";

import type { TaskRepository } from "@/features/tasks/contracts/task-repository.interface";

import type { Task } from "@/features/tasks/entities/task.entity";

export class TaskSearchReader
  implements TaskSearchReaderContract
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