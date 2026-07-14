import type { Command } from "../../shared/contracts/command.interface";
import type { DeleteTaskDto } from "../dto/delete-task.dto";

export class DeleteTaskCommand implements Command {
  readonly type = "task.delete";

  constructor(
    public readonly dto: DeleteTaskDto,
  ) {}
}