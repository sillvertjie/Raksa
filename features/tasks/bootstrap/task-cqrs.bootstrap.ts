import type { CommandBus } from "../../shared/contracts/command-bus.interface";
import type { QueryBus } from "../../shared/contracts/query-bus.interface";

import type { TaskService } from "../contracts/task-service.interface";
import type { TaskRepository } from "../contracts/task-repository.interface";

import { CreateTaskCommandHandler } from "../handlers/create-task.command-handler";
import { UpdateTaskCommandHandler } from "../handlers/update-task.command-handler";
import { DeleteTaskCommandHandler } from "../handlers/delete-task.command-handler";

import { GetTaskQueryHandler } from "../handlers/get-task.query-handler";
import { ListTasksQueryHandler } from "../handlers/list-tasks.query-handler";

export function registerTaskCommands(
  commandBus: CommandBus,
  taskService: TaskService,
): void {
  commandBus.register(
    "task.create",
    new CreateTaskCommandHandler(taskService),
  );

  commandBus.register(
    "task.update",
    new UpdateTaskCommandHandler(taskService),
  );

  commandBus.register(
    "task.delete",
    new DeleteTaskCommandHandler(taskService),
  );
}

export function registerTaskQueries(
  queryBus: QueryBus,
  taskRepository: TaskRepository,
): void {
  queryBus.register(
    "task.get",
    new GetTaskQueryHandler(taskRepository),
  );

  queryBus.register(
    "task.list",
    new ListTasksQueryHandler(taskRepository),
  );
}