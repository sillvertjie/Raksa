import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface TaskDeletedPayload {
  taskId: string;
}

export class TaskDeletedEvent
  implements DomainEvent<TaskDeletedPayload>
{
  readonly type = "task.deleted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: TaskDeletedPayload,
  ) {}
}