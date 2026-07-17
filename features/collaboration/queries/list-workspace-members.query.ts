import type { Query } from "@/features/shared/contracts/query.interface";

export class ListWorkspaceMembersQuery implements Query {
  readonly type = "membership.list";

  constructor(
    public readonly workspaceId: string,
  ) {}
}