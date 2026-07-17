import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { MembershipRepository } from "../contracts/membership-repository.interface";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

import { ListWorkspaceMembersQuery } from "../queries/list-workspace-members.query";

export class ListWorkspaceMembersQueryHandler
  implements QueryHandler<ListWorkspaceMembersQuery>
{
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async execute(
    query: ListWorkspaceMembersQuery,
  ): Promise<WorkspaceMembership[]> {
    return this.repository.findByWorkspace(
      query.workspaceId,
    );
  }
}