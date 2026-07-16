import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface TaskUpdatedPayload {
  taskId: string;
}

export class TaskUpdatedEvent
  implements DomainEvent<TaskUpdatedPayload>
{
  readonly type = "task.updated";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: TaskUpdatedPayload,
  ) {}
}