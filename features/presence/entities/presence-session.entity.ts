import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type PresenceStatus =
  | "ONLINE"
  | "OFFLINE";

export interface PresenceSession extends BaseEntity {
  workspaceId: string;
  userId: string;
  status: PresenceStatus;
  lastSeenAt: Date;
}