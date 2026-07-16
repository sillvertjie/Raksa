import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface ProjectUpdatedPayload {
  projectId: string;
}

export class ProjectUpdatedEvent
  implements DomainEvent<ProjectUpdatedPayload>
{
  readonly type = "project.updated";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: ProjectUpdatedPayload,
  ) {}
}