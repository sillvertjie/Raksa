import type { SearchDTO } from "../dto/search.dto";
import type { SearchResult } from "../types/search";

const API_URL = "/api/search";

export async function search(
  dto: SearchDTO
): Promise<SearchResult> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    throw new Error("Failed to search.");
  }

  return response.json();
}