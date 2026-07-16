import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface TaskCreatedPayload {
  taskId: string;
}

export class TaskCreatedEvent
  implements DomainEvent<TaskCreatedPayload>
{
  readonly type = "task.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: TaskCreatedPayload,
  ) {}
}