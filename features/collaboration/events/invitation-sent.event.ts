import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface InvitationSentPayload {
  invitationId: string;
}

export class InvitationSentEvent
  implements DomainEvent<InvitationSentPayload>
{
  readonly type = "invitation.sent";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: InvitationSentPayload,
  ) {}
}