import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { TaskService } from "../contracts/task-service.interface";
import type { Task } from "../entities/task.entity";
import { UpdateTaskCommand } from "../commands/update-task.command";

export class UpdateTaskCommandHandler
  implements CommandHandler<UpdateTaskCommand>
{
  constructor(
    private readonly service: TaskService,
  ) {}

  async execute(
    command: UpdateTaskCommand,
  ): Promise<Task> {
    return this.service.update(
      command.id,
      command.dto,
    );
  }
}