import type { Query } from "@/features/shared/contracts/query.interface";

export class ListWorkspaceInvitationsQuery implements Query {
  readonly type = "invitation.list";

  constructor(
    public readonly workspaceId: string,
  ) {}
}