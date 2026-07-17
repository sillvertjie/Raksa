import type { Query } from "@/features/shared/contracts/query.interface";

export class GetInvitationQuery implements Query {
  readonly type = "invitation.get";

  constructor(
    public readonly id: string,
  ) {}
}