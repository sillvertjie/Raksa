import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export class TaskDeletedEvent implements DomainEvent {
  readonly type = "task.deleted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: {
      taskId: string;
    },
  ) {}
}