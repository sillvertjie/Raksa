import type { DomainEvent } from "../../shared/contracts/domain-event.interface";
import type { Projection } from "../../shared/contracts/projection.interface";
import type { ActivityProjectionService } from "../contracts/activity-service.interface";

export class ActivityProjection implements Projection {
  readonly name = "activity";

  constructor(
    private readonly service: ActivityProjectionService,
  ) {}

  supports(event: DomainEvent): boolean {
    return [
      "project.",
      "task.",
      "knowledge.",
      "invitation.",
      "membership.",
      "comment.",
    ].some((prefix) =>
      event.type.startsWith(prefix),
    );
  }

  async project(
    event: DomainEvent,
  ): Promise<void> {
    await this.service.project(event);
  }
}