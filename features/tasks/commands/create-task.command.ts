import type { Command } from "../../shared/contracts/command.interface";
import type { CreateTaskDto } from "../dto/create-task.dto";

export class CreateTaskCommand implements Command {
  readonly type = "task.create";

  constructor(
    public readonly dto: CreateTaskDto,
  ) {}
}