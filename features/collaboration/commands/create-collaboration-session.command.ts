import type { Command } from "@/features/shared/contracts/command.interface";
import type { CreateCollaborationSessionDto } from "../dto/create-collaboration-session.dto";

export class CreateCollaborationSessionCommand
  implements Command
{
  readonly type =
    "collaboration-session.create";

  constructor(
    public readonly dto: CreateCollaborationSessionDto,
  ) {}
}