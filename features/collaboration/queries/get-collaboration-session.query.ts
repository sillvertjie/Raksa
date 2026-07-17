import type { Query } from "@/features/shared/contracts/query.interface";

export class GetCollaborationSessionQuery
  implements Query
{
  readonly type =
    "collaboration-session.get";

  constructor(
    public readonly id: string,
  ) {}
}