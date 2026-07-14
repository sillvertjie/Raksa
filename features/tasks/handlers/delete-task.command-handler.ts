import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { TaskService } from "../contracts/task-service.interface";
import { DeleteTaskCommand } from "../commands/delete-task.command";

export class DeleteTaskCommandHandler
  implements CommandHandler<DeleteTaskCommand>
{
  constructor(
    private readonly service: TaskService,
  ) {}

  async execute(
    command: DeleteTaskCommand,
  ): Promise<void> {
    return this.service.delete(command.dto.id);
  }
}