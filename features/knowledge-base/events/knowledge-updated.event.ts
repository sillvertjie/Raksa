import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface KnowledgeUpdatedPayload {
  knowledgeId: string;
}

export class KnowledgeUpdatedEvent
  implements DomainEvent<KnowledgeUpdatedPayload>
{
  readonly type = "knowledge.updated";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: KnowledgeUpdatedPayload,
  ) {}
}