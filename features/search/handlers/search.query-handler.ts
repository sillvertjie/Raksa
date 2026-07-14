import type { QueryHandler } from "../../shared/contracts/query-handler.interface";

import type { SearchIndexRepository } from "../contracts/search-index.repository.interface";
import type { SearchIndexDocument } from "../entities/search-index-document.entity";
import type { SearchQuery } from "../queries/search.queries";

export class SearchQueryHandler
  implements QueryHandler<SearchQuery, SearchIndexDocument[]>
{
  constructor(
    private readonly repository: SearchIndexRepository,
  ) {}

  async execute(
    query: SearchQuery,
  ): Promise<SearchIndexDocument[]> {
    return this.repository.search(
      query.userId,
      query.query,
    );
  }
}