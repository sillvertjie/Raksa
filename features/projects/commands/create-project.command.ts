import type { Command } from "../../shared/contracts/command.interface";
import type { CreateProjectDto } from "../dto/create-project.dto";

export class CreateProjectCommand implements Command {
  readonly type = "project.create";

  constructor(
    public readonly dto: CreateProjectDto,
  ) {}
}