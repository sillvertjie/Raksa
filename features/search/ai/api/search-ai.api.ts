import { apiFetch } from "@/lib/api/client";

import type { AISearchRequest } from "../contracts/ai-search-request";
import type { AISearchResponse } from "../contracts/ai-search-response";

const API_URL = "/api/search-ai";


export function searchAI(
  request: AISearchRequest,
) {
  return apiFetch<AISearchResponse>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(request),
    },
  );
}