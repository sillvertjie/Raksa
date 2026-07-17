import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface MembershipRemovedPayload {
  membershipId: string;
}

export class MembershipRemovedEvent
  implements DomainEvent<MembershipRemovedPayload>
{
  readonly type = "membership.removed";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: MembershipRemovedPayload,
  ) {}
}