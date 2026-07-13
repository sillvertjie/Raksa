import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import type { Project } from "../entities/project.entity";
import { UpdateProjectCommand } from "../commands/update-project.command";

export class UpdateProjectCommandHandler
  implements CommandHandler<UpdateProjectCommand>
{
  constructor(
    private readonly service: ProjectService,
  ) {}

  async execute(
    command: UpdateProjectCommand,
  ): Promise<Project> {
    return this.service.update(
      command.id,
      command.dto,
    );
  }
}