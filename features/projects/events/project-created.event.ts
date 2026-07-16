import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface ProjectCreatedPayload {
  projectId: string;
}

export class ProjectCreatedEvent
  implements DomainEvent<ProjectCreatedPayload>
{
  readonly type = "project.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: ProjectCreatedPayload,
  ) {}
}