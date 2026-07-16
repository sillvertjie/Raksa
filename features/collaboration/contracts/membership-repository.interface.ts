import type { WorkspaceMembership } from "@/features/collaboration/entities/workspace-membership.entity";

export interface MembershipRepository {
  create(
    membership: WorkspaceMembership
  ): Promise<WorkspaceMembership>;

  findById(
    id: string
  ): Promise<WorkspaceMembership | null>;

  findByWorkspace(
    workspaceId: string
  ): Promise<WorkspaceMembership[]>;
}