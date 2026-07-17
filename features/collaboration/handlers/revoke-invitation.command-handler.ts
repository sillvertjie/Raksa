import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { InvitationService } from "../contracts/invitation-service.interface";

import { RevokeInvitationCommand } from "../commands/revoke-invitation.command";

export class RevokeInvitationCommandHandler
  implements CommandHandler<RevokeInvitationCommand>
{
  constructor(
    private readonly service: InvitationService,
  ) {}

  async execute(
    command: RevokeInvitationCommand,
  ): Promise<void> {
    return this.service.revoke(command.id);
  }
}