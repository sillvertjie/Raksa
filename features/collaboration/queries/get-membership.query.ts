import type { Query } from "@/features/shared/contracts/query.interface";

export class GetMembershipQuery implements Query {
  readonly type = "membership.get";

  constructor(
    public readonly id: string,
  ) {}
}