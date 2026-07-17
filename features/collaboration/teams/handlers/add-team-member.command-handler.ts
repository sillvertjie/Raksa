import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { TeamMemberService } from "../contracts/team-member-service.interface";
import type { TeamMember } from "../entities/team-member.entity";

import { AddTeamMemberCommand } from "../commands/add-team-member.command";

export class AddTeamMemberCommandHandler
  implements CommandHandler<AddTeamMemberCommand>
{
  constructor(
    private readonly service: TeamMemberService,
  ) {}

  async execute(
    command: AddTeamMemberCommand,
  ): Promise<TeamMember> {
    return this.service.add(command.dto);
  }
}