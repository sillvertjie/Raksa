import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";
import type { MembershipRole } from "./workspace-membership.entity";

export type InvitationStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REVOKED"
  | "EXPIRED";

export interface WorkspaceInvitation extends BaseEntity {
  workspaceId: string;
  email: string;
  role: MembershipRole;
  token: string;
  status: InvitationStatus;
  expiresAt: Date;
}