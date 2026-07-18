import type { WorkspaceMembership } from "@/features/collaboration/entities/workspace-membership.entity";

export interface MembershipRepository {
  create(
    membership: WorkspaceMembership,
  ): Promise<WorkspaceMembership>;

  delete(
    id: string,
  ): Promise<void>;

  findById(
    id: string,
  ): Promise<WorkspaceMembership | null>;

  findByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceMembership[]>;

  findByUser(
    userId: string,
  ): Promise<WorkspaceMembership[]>;
}