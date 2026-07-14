import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export class TaskUpdatedEvent implements DomainEvent {
  readonly type = "task.updated";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: {
      taskId: string;
    },
  ) {}
}