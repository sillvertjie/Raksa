import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type CollaborationSessionStatus =
  | "CREATED"
  | "ENDED";

export interface CollaborationSession extends BaseEntity {
  workspaceId: string;
  startedBy: string;
  status: CollaborationSessionStatus;
  endedAt: Date | null;
}