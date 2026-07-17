import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { InvitationRepository } from "../contracts/invitation-repository.interface";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { GetInvitationQuery } from "../queries/get-invitation.query";

export class GetInvitationQueryHandler
  implements QueryHandler<GetInvitationQuery>
{
  constructor(
    private readonly repository: InvitationRepository,
  ) {}

  async execute(
    query: GetInvitationQuery,
  ): Promise<WorkspaceInvitation | null> {
    return this.repository.findById(query.id);
  }
}