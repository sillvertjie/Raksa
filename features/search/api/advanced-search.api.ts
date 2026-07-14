import { apiFetch } from "@/lib/api/client";

import type { SearchIndexDocument } from "../entities/search-index-document.entity";

import type { SearchQueryDto } from "../dto/search-query.dto";


const API_URL =
  "/api/search/advanced";


export function advancedSearch(
  dto: SearchQueryDto,
) {
  return apiFetch<SearchIndexDocument[]>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(dto),
    },
  );
}