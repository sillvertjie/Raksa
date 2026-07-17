import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { InvitationService } from "../contracts/invitation-service.interface";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { AcceptInvitationCommand } from "../commands/accept-invitation.command";

export class AcceptInvitationCommandHandler
  implements CommandHandler<AcceptInvitationCommand>
{
  constructor(
    private readonly service: InvitationService,
  ) {}

  async execute(
    command: AcceptInvitationCommand,
  ): Promise<WorkspaceInvitation> {
    return this.service.accept(command.token);
  }
}