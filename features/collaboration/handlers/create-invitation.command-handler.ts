import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { InvitationService } from "../contracts/invitation-service.interface";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { CreateInvitationCommand } from "../commands/create-invitation.command";

export class CreateInvitationCommandHandler
  implements CommandHandler<CreateInvitationCommand>
{
  constructor(
    private readonly service: InvitationService,
  ) {}

  async execute(
    command: CreateInvitationCommand,
  ): Promise<WorkspaceInvitation> {
    return this.service.create(command.dto);
  }
}