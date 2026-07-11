import type { AIResponse } from "@/ai/service/contracts/ai-service.interface";

import type { ContentGenerationResponse } from "../contracts/content-generation-response";

export class ContentGenerationResponseMapper {
  static fromAIResponse(
    response: AIResponse,
  ): ContentGenerationResponse {
    return {
      content: response.message,
    };
  }
}