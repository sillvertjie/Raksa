import type { Command } from "@/features/shared/contracts/command.interface";

export class EndCollaborationSessionCommand
  implements Command
{
  readonly type =
    "collaboration-session.end";

  constructor(
    public readonly id: string,
  ) {}
}