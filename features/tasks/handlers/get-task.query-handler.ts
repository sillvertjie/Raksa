import type { QueryHandler } from "../../shared/contracts/query-handler.interface";
import type { TaskRepository } from "../contracts/task-repository.interface";
import type { Task } from "../entities/task.entity";
import type { GetTaskQuery } from "../queries/get-task.query";

export class GetTaskQueryHandler
  implements QueryHandler<GetTaskQuery, Task | null>
{
  constructor(
    private readonly repository: TaskRepository,
  ) {}

  async execute(
    query: GetTaskQuery,
  ): Promise<Task | null> {
    return this.repository.findById(query.id);
  }
}