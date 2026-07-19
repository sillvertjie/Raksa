import type { DomainEvent } from "../../shared/contracts/domain-event.interface";
import type { ActivityRepository } from "../contracts/activity-repository.interface";
import type { ActivityProjectionService } from "../contracts/activity-service.interface";
import type { ActivityEntry } from "../entities/activity-entry.entity";

export class DefaultActivityProjectionService
  implements ActivityProjectionService
{
  constructor(
    private readonly repository: ActivityRepository,
  ) {}

  async project(
    event: DomainEvent,
  ): Promise<ActivityEntry> {
    const activity: ActivityEntry = {
      id: crypto.randomUUID(),

      workspaceId:
        this.resolveWorkspaceId(event),

      actorId:
        this.resolveActorId(event),

      entityType:
        this.resolveEntityType(event.type),

      entityId:
        this.resolveEntityId(event),

      eventName:
        event.type,

      summary:
        event.type,

      occurredAt:
        event.occurredAt,

      metadata:
        this.resolveMetadata(event),
    };

    return this.repository.append(activity);
  }

  private resolveWorkspaceId(
    event: DomainEvent,
  ): string | undefined {
    const payload =
      this.getPayloadRecord(event);

    return typeof payload.workspaceId === "string"
      ? payload.workspaceId
      : undefined;
  }

  private resolveActorId(
    event: DomainEvent,
  ): string | undefined {
    const payload =
      this.getPayloadRecord(event);

    if (
      typeof payload.actorId === "string"
    ) {
      return payload.actorId;
    }

    if (
      typeof payload.authorId === "string"
    ) {
      return payload.authorId;
    }

    return undefined;
  }

  private resolveEntityType(
    eventType: string,
  ): string {
    return eventType.split(".")[0];
  }

  private resolveEntityId(
    event: DomainEvent,
  ): string {
    const payload =
      this.getPayloadRecord(event);

    const idField =
      Object.keys(payload)
        .find((key) =>
          key.endsWith("Id"),
        );

    return idField
      ? String(payload[idField])
      : "";
  }

  private resolveMetadata(
    event: DomainEvent,
  ): Record<string, unknown> {
    const payload =
      event.payload;

    if (
      typeof payload === "object" &&
      payload !== null
    ) {
      return payload as Record<
        string,
        unknown
      >;
    }

    return {};
  }

  private getPayloadRecord(
    event: DomainEvent,
  ): Record<string, unknown> {
    if (
      typeof event.payload === "object" &&
      event.payload !== null
    ) {
      return event.payload as Record<
        string,
        unknown
      >;
    }

    return {};
  }
}