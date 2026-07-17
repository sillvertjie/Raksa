import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { MembershipRepository } from "../contracts/membership-repository.interface";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

import { GetMembershipQuery } from "../queries/get-membership.query";

export class GetMembershipQueryHandler
  implements QueryHandler<GetMembershipQuery>
{
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async execute(
    query: GetMembershipQuery,
  ): Promise<WorkspaceMembership | null> {
    return this.repository.findById(query.id);
  }
}