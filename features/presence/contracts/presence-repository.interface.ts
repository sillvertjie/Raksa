import type { PresenceSession } from "../entities/presence-session.entity";

export interface PresenceRepository {
  save(
    presence: PresenceSession,
  ): Promise<PresenceSession>;

  findById(
    id: string,
  ): Promise<PresenceSession | null>;

  findByWorkspaceId(
    workspaceId: string,
  ): Promise<PresenceSession[]>;

  delete(
    id: string,
  ): Promise<void>;
}