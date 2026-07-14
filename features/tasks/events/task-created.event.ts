import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export class TaskCreatedEvent implements DomainEvent {
  readonly type = "task.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: {
      taskId: string;
    },
  ) {}
}