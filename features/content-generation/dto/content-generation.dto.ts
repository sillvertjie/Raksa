import type { ContentGenerationOptions } from "../contracts/content-generation-request";

export interface ContentGenerationDto {
  content: string;
  instruction: string;
  options?: ContentGenerationOptions;
}