import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { MembershipService } from "../contracts/membership-service.interface";

import { RemoveMembershipCommand } from "../commands/remove-membership.command";

export class RemoveMembershipCommandHandler
  implements CommandHandler<RemoveMembershipCommand>
{
  constructor(
    private readonly service: MembershipService,
  ) {}

  async execute(
    command: RemoveMembershipCommand,
  ): Promise<void> {
    return this.service.remove(command.id);
  }
}