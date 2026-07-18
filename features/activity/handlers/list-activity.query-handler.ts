import type { QueryHandler } from "../../shared/contracts/query-handler.interface";

import type { ListActivityQuery } from "../queries/list-activity.query";
import type { ActivityEntry } from "../entities/activity-entry.entity";

import type { DefaultActivityQueryService } from "../services/activity-query.service";

export class ListActivityQueryHandler
  implements QueryHandler<
    ListActivityQuery,
    ActivityEntry[]
  >
{
  constructor(
    private readonly service: DefaultActivityQueryService,
  ) {}

  async execute(
    query: ListActivityQuery,
  ): Promise<ActivityEntry[]> {
      return this.service.list(
        query.workspaceId,
        query.userId,
    );
  }
}