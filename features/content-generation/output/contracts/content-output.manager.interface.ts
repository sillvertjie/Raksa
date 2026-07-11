import type { ContentGenerationResponse } from "@/features/content-generation/contracts/content-generation-response";

export interface ContentOutputManager {
  manage(
    response: ContentGenerationResponse,
  ): ContentGenerationResponse;
}