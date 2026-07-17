import type { MembershipRole } from "../entities/workspace-membership.entity";

export interface WorkspaceAccessService {
  hasAccess(
    workspaceId: string,
    userId: string,
  ): Promise<boolean>;

  hasRole(
    workspaceId: string,
    userId: string,
    role: MembershipRole,
  ): Promise<boolean>;
}