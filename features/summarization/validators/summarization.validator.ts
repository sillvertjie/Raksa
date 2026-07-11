import type { SummarizeDto } from "../dto/summarize.dto";

export function validateSummarizeDto(
  dto: SummarizeDto
): void {
  if (!dto.content.trim()) {
    throw new Error("Content is required.");
  }
}