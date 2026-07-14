import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { TaskService } from "../contracts/task-service.interface";
import type { Task } from "../entities/task.entity";
import { CreateTaskCommand } from "../commands/create-task.command";

export class CreateTaskCommandHandler
  implements CommandHandler<CreateTaskCommand>
{
  constructor(
    private readonly service: TaskService,
  ) {}

  async execute(
    command: CreateTaskCommand,
  ): Promise<Task> {
    return this.service.create(command.dto);
  }
}