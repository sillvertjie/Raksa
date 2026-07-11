import type { AIResponse } from "@/ai/service/contracts/ai-service.interface";

import type { AISearchResponse } from "../contracts/ai-search-response";

export class SearchResponseMapper {
  static fromAIResponse(
    response: AIResponse,
  ): AISearchResponse {
    return {
      content: response.message,
    };
  }
}