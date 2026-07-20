import type { SearchSource } from "../entities/search-index-document.entity";

export function createSearchDocumentId(
  source: SearchSource,
  id: string,
): string {
  return `${source}_${id}`;
}