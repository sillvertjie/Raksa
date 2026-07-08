import type { SearchDTO } from "../dto/search.dto";

export function validateSearchDTO(
  dto: SearchDTO
): string | null {
  const query = dto.query.trim();

  if (!query) {
    return "Search query is required.";
  }

  return null;
}