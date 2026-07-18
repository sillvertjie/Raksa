import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface PresenceOfflinePayload {
  presenceId: string;
}

export class PresenceOfflineEvent
  implements DomainEvent<PresenceOfflinePayload>
{
  readonly type = "presence.offline";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: PresenceOfflinePayload,
  ) {}
}