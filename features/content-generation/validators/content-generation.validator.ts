import type { ContentGenerationDto } from "../dto/content-generation.dto";

const allowedModes = [
  "generate",
  "rewrite",
  "expand",
  "improve",
  "continue",
  "translate",
] as const;

export function validateContentGenerationDto(
  dto: ContentGenerationDto
): void {
  if (!dto.content.trim()) {
    throw new Error("Content is required.");
  }

  if (!dto.instruction.trim()) {
    throw new Error("Instruction is required.");
  }

  if (
    dto.options?.mode &&
    !allowedModes.includes(dto.options.mode)
  ) {
    throw new Error("Invalid content generation mode.");
  }
}