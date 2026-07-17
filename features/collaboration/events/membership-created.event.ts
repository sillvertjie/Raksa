import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface MembershipCreatedPayload {
  membershipId: string;
}

export class MembershipCreatedEvent
  implements DomainEvent<MembershipCreatedPayload>
{
  readonly type = "membership.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: MembershipCreatedPayload,
  ) {}
}