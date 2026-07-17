import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { TeamService } from "../contracts/team-service.interface";
import type { Team } from "../entities/team.entity";

import { CreateTeamCommand } from "../commands/create-team.command";

export class CreateTeamCommandHandler
  implements CommandHandler<CreateTeamCommand>
{
  constructor(
    private readonly service: TeamService,
  ) {}

  async execute(
    command: CreateTeamCommand,
  ): Promise<Team> {
    return this.service.create(command.dto);
  }
}