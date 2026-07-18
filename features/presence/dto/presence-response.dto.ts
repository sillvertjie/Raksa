import type { PresenceStatus } from "../entities/presence-session.entity";

export interface PresenceResponseDto {
  id: string;
  workspaceId: string;
  userId: string;
  status: PresenceStatus;
  lastSeenAt: string;
}