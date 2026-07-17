import type { CommandBus } from "@/features/shared/contracts/command-bus.interface";
import type { QueryBus } from "@/features/shared/contracts/query-bus.interface";

import type { TeamService } from "../contracts/team-service.interface";
import type { TeamMemberService } from "../contracts/team-member-service.interface";

import { CreateTeamCommandHandler } from "../handlers/create-team.command-handler";
import { AddTeamMemberCommandHandler } from "../handlers/add-team-member.command-handler";

import { GetTeamQueryHandler } from "../handlers/get-team.query-handler";
import { ListWorkspaceTeamsQueryHandler } from "../handlers/list-workspace-teams.query-handler";

export function registerTeamCommands(
  commandBus: CommandBus,
  teamService: TeamService,
  teamMemberService: TeamMemberService,
): void {
  commandBus.register(
    "team.create",
    new CreateTeamCommandHandler(
      teamService,
    ),
  );

  commandBus.register(
    "team-member.add",
    new AddTeamMemberCommandHandler(
      teamMemberService,
    ),
  );
}

export function registerTeamQueries(
  queryBus: QueryBus,
  teamService: TeamService,
): void {
  queryBus.register(
    "team.get",
    new GetTeamQueryHandler(
      teamService,
    ),
  );

  queryBus.register(
    "team.list",
    new ListWorkspaceTeamsQueryHandler(
      teamService,
    ),
  );
}