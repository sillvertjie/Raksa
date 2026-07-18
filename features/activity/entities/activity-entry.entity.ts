export interface ActivityEntry {
  id: string;

  workspaceId?: string;

  actorId?: string;

  entityType: string;

  entityId: string;

  eventName: string;

  summary: string;

  occurredAt: Date;

  metadata: Record<string, unknown>;
}