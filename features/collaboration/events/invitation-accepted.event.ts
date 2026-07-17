import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface InvitationAcceptedPayload {
  invitationId: string;
}

export class InvitationAcceptedEvent
  implements DomainEvent<InvitationAcceptedPayload>
{
  readonly type = "invitation.accepted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: InvitationAcceptedPayload,
  ) {}
}