import type { Query } from "@/features/shared/contracts/query.interface";

export interface GetWorkspaceItemsQueryOptions {
  cursor?: string;

  limit?: number;

  itemType?: 
    | "project"
    | "task"
    | "knowledge"
    | "comment";
}

export class GetWorkspaceItemsQuery
  implements Query
{
  readonly type =
    "workspace.get-items";

  constructor(
    public readonly workspaceId: string,
    public readonly userId: string,
    public readonly options: GetWorkspaceItemsQueryOptions = {},
  ) {}
}