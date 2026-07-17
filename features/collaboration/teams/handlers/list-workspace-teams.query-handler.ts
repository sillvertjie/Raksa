import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { TeamService } from "../contracts/team-service.interface";
import type { Team } from "../entities/team.entity";

import { ListWorkspaceTeamsQuery } from "../queries/list-workspace-teams.query";

export class ListWorkspaceTeamsQueryHandler
  implements QueryHandler<ListWorkspaceTeamsQuery>
{
  constructor(
    private readonly service: TeamService,
  ) {}

  async execute(
    query: ListWorkspaceTeamsQuery,
  ): Promise<Team[]> {
    return this.service.getByWorkspace(
      query.workspaceId,
    );
  }
}