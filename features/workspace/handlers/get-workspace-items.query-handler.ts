import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";

import type {
  WorkspaceReadModelPage,
} from "../entities/workspace-read-model.entity";

import type {
  WorkspaceQueryService,
} from "../services/workspace-query.service";

import type {
  GetWorkspaceItemsQuery,
} from "../queries/get-workspace-items.query";

export class GetWorkspaceItemsQueryHandler
  implements
    QueryHandler<
      GetWorkspaceItemsQuery,
      WorkspaceReadModelPage
    >
{
  constructor(
    private readonly service: WorkspaceQueryService,
  ) {}

  async execute(
    query: GetWorkspaceItemsQuery,
  ): Promise<WorkspaceReadModelPage> {
    return this.service.list(
      {
        workspaceId:
          query.workspaceId,

        cursor:
          query.options.cursor,

        limit:
          query.options.limit,

        itemType:
          query.options.itemType,
      },
      {
        userId:
          query.userId,
      },
    );
  }
}