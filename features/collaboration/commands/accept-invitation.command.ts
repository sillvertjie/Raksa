import type { Command } from "@/features/shared/contracts/command.interface";

export class AcceptInvitationCommand implements Command {
  readonly type = "invitation.accept";

  constructor(
    public readonly token: string,
  ) {}
}