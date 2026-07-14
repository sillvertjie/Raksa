import type { SearchIndexDocument } from "../entities/search-index-document.entity";

export interface SearchIndexRepository {
  upsert(
    document: SearchIndexDocument,
  ): Promise<void>;

  remove(
    id: string,
  ): Promise<void>;

  search(
    userId: string,
    query: string,
  ): Promise<SearchIndexDocument[]>;
}