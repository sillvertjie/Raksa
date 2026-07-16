import type { DomainEvent } from "../../shared/contracts/domain-event.interface";

export interface KnowledgeDeletedPayload {
  knowledgeId: string;
}

export class KnowledgeDeletedEvent
  implements DomainEvent<KnowledgeDeletedPayload>
{
  readonly type = "knowledge.deleted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: KnowledgeDeletedPayload,
  ) {}
}