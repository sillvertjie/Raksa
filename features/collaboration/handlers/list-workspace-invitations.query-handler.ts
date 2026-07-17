import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { InvitationRepository } from "../contracts/invitation-repository.interface";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

import { ListWorkspaceInvitationsQuery } from "../queries/list-workspace-invitations.query";

export class ListWorkspaceInvitationsQueryHandler
  implements QueryHandler<ListWorkspaceInvitationsQuery>
{
  constructor(
    private readonly repository: InvitationRepository,
  ) {}

  async execute(
    query: ListWorkspaceInvitationsQuery,
  ): Promise<WorkspaceInvitation[]> {
    return this.repository.findByWorkspace(query.workspaceId);
  }
}