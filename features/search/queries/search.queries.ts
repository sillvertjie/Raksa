import type { Query } from "../../shared/contracts/query.interface";

export class SearchQuery implements Query {
  readonly type = "search.query";

  constructor(
    public readonly scopeId: string,
    public readonly query: string,
    public readonly source?: string,
  ) {}
}