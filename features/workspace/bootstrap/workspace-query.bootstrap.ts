import type { QueryBus } from "@/features/shared/contracts/query-bus.interface";

import { GetWorkspaceItemsQueryHandler } from "../handlers/get-workspace-items.query-handler";

import { WorkspaceQueryService } from "../services/workspace-query.service";

import { getWorkspaceReadModelRepository } from "../repositories/workspace-read-model.repository.runtime";

import { permissionEvaluationService } from "@/features/collaboration/access/collaboration-access.runtime";


export function registerWorkspaceQueries(
  queryBus: QueryBus,
): void {
  const repository =
    getWorkspaceReadModelRepository();

  const service =
    new WorkspaceQueryService(
      repository,
      permissionEvaluationService,
    );

  queryBus.register(
    "workspace.get-items",
    new GetWorkspaceItemsQueryHandler(
      service,
    ),
  );
}