import type { QueryHandler } from "../../shared/contracts/query-handler.interface";
import type { TaskRepository } from "../contracts/task-repository.interface";
import type { Task } from "../entities/task.entity";
import type { ListTasksQuery } from "../queries/list-tasks.query";

export class ListTasksQueryHandler
  implements QueryHandler<ListTasksQuery, Task[]>
{
  constructor(
    private readonly repository: TaskRepository,
  ) {}

  async execute(
    query: ListTasksQuery,
  ): Promise<Task[]> {
    void query;

    return this.repository.findAll();
  }
}