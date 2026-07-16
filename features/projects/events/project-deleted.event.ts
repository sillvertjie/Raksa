import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface ProjectDeletedPayload {
  projectId: string;
}

export class ProjectDeletedEvent
  implements DomainEvent<ProjectDeletedPayload>
{
  readonly type = "project.deleted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: ProjectDeletedPayload,
  ) {}
}