import type { Query } from "../../shared/contracts/query.interface";

export class ListActivityQuery implements Query {
  readonly type = "activity.list";

  constructor(
    public readonly workspaceId: string,
    public readonly userId: string,
  ) {}
}