import type { Command } from "@/features/shared/contracts/command.interface";

export class RevokeInvitationCommand implements Command {
  readonly type = "invitation.revoke";

  constructor(
    public readonly id: string,
  ) {}
}