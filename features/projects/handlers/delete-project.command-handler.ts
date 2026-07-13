import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import { DeleteProjectCommand } from "../commands/delete-project.command";

export class DeleteProjectCommandHandler
  implements CommandHandler<DeleteProjectCommand>
{
  constructor(
    private readonly service: ProjectService,
  ) {}

  async execute(
    command: DeleteProjectCommand,
  ): Promise<void> {
    return this.service.delete(command.dto.id);
  }
}