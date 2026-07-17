import type { WorkspaceAccessService } from "./workspace-access.interface";
import type { MembershipRepository } from "../contracts/membership-repository.interface";
import type { MembershipRole } from "../entities/workspace-membership.entity";

export class DefaultWorkspaceAccessService
  implements WorkspaceAccessService
{
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async hasAccess(
    workspaceId: string,
    userId: string,
  ): Promise<boolean> {
    const members = await this.repository.findByWorkspace(
      workspaceId,
    );

    return members.some(
      (member) =>
        member.userId === userId &&
        member.status === "ACTIVE",
    );
  }

  async hasRole(
    workspaceId: string,
    userId: string,
    role: MembershipRole,
  ): Promise<boolean> {
    const members = await this.repository.findByWorkspace(
      workspaceId,
    );

    return members.some(
      (member) =>
        member.userId === userId &&
        member.role === role &&
        member.status === "ACTIVE",
    );
  }
}