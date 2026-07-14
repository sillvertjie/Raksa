import type { SearchDTO } from "../dto/search.dto";

export class SearchValidator {
  static validate(
    dto: SearchDTO,
  ): void {
    this.validateQuery(dto.query);
  }

  private static validateQuery(
    query: string,
  ): void {
    const value = query.trim();

    if (value.length === 0) {
      throw new Error("Search query is required.");
    }

    if (value.length > 200) {
      throw new Error(
        "Search query must not exceed 200 characters.",
      );
    }
  }
}