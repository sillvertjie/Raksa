import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface PresenceOnlinePayload {
  presenceId: string;
}

export class PresenceOnlineEvent
  implements DomainEvent<PresenceOnlinePayload>
{
  readonly type = "presence.online";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: PresenceOnlinePayload,
  ) {}
}