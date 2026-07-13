import type { Command } from "../../shared/contracts/command.interface";
import type { DeleteProjectDto } from "../dto/delete-project.dto";

export class DeleteProjectCommand implements Command {
  readonly type = "project.delete";

  constructor(
    public readonly dto: DeleteProjectDto,
  ) {}
}