import type { MembershipRole } from "@/features/collaboration/entities/workspace-membership.entity";

export interface CreateMembershipDto {
  workspaceId: string;
  userId: string;
  role: MembershipRole;
}