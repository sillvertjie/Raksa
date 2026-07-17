import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { MembershipService } from "../contracts/membership-service.interface";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

import { CreateMembershipCommand } from "../commands/create-membership.command";

export class CreateMembershipCommandHandler
  implements CommandHandler<CreateMembershipCommand>
{
  constructor(
    private readonly service: MembershipService,
  ) {}

  async execute(
    command: CreateMembershipCommand,
  ): Promise<WorkspaceMembership> {
    return this.service.create(command.dto);
  }
}