import type { SearchResult } from "../types/search";

export interface SearchRepositoryInterface {
  search(
    userId: string,
    query: string
  ): Promise<SearchResult>;
}