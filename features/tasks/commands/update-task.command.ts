import type { Command } from "../../shared/contracts/command.interface";
import type { UpdateTaskDto } from "../dto/update-task.dto";

export class UpdateTaskCommand implements Command {
  readonly type = "task.update";

  constructor(
    public readonly id: string,
    public readonly dto: UpdateTaskDto,
  ) {}
}