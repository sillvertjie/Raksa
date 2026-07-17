import type { MembershipRole } from "../entities/workspace-membership.entity";

export interface CreateInvitationDto {
  workspaceId: string;
  email: string;
  role: MembershipRole;
  expiresAt: Date;
}