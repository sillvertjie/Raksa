import type { SearchDTO } from "../dto/search.dto";
import type { SearchResult } from "../types/search";

export interface SearchServiceInterface {
  search(
    userId: string,
    dto: SearchDTO
  ): Promise<SearchResult>;
}