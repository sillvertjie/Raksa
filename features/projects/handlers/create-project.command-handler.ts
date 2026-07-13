import type { CommandHandler } from "../../shared/contracts/command-handler.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import type { Project } from "../entities/project.entity";
import { CreateProjectCommand } from "../commands/create-project.command";

export class CreateProjectCommandHandler
  implements CommandHandler<CreateProjectCommand>
{
  constructor(
    private readonly service: ProjectService,
  ) {}

  async execute(
    command: CreateProjectCommand,
  ): Promise<Project> {
    return this.service.create(command.dto);
  }
}