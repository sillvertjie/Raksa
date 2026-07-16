import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type MembershipRole =
  | "OWNER"
  | "ADMIN"
  | "MEMBER"
  | "VIEWER";

export type MembershipStatus =
  | "ACTIVE"
  | "REMOVED";

export interface WorkspaceMembership extends BaseEntity {
  workspaceId: string;
  userId: string;
  role: MembershipRole;
  status: MembershipStatus;
}