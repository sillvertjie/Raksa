import type { Command } from "../../shared/contracts/command.interface";
import type { UpdateProjectDto } from "../dto/update-project.dto";

export class UpdateProjectCommand implements Command {
  readonly type = "project.update";

  constructor(
    public readonly workspaceId: string,
    public readonly id: string,
    public readonly dto: UpdateProjectDto,
  ) {}
}