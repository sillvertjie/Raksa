import { apiFetch } from "@/lib/api/client";

import type { SearchDTO } from "../dto/search.dto";
import type { SearchResult } from "../types/search";

const API_URL = "/api/search";

export function search(
  dto: SearchDTO
) {
  return apiFetch<SearchResult>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(dto),
    }
  );
}