import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { TeamService } from "../contracts/team-service.interface";
import type { Team } from "../entities/team.entity";

import { GetTeamQuery } from "../queries/get-team.query";

export class GetTeamQueryHandler
  implements QueryHandler<GetTeamQuery>
{
  constructor(
    private readonly service: TeamService,
  ) {}

  async execute(
    query: GetTeamQuery,
  ): Promise<Team | null> {
    return this.service.getById(query.id);
  }
}