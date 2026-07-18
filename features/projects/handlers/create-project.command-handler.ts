import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import { CreateProjectCommand } from "../commands/create-project.command";

export class CreateProjectCommandHandler
  implements CommandHandler<CreateProjectCommand>
{
  constructor(
    private readonly service: ProjectService,
  ) {}

  async execute(
    command: CreateProjectCommand,
  ) {
    return this.service.create(
      command.workspaceId,
      command.dto,
    );
  }
}