import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface KnowledgeCreatedPayload {
  knowledgeId: string;
}

export class KnowledgeCreatedEvent
  implements DomainEvent<KnowledgeCreatedPayload>
{
  readonly type = "knowledge.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: KnowledgeCreatedPayload,
  ) {}
}