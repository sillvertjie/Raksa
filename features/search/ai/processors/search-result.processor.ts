import type { AIResponse } from "@/ai/service/contracts/ai-service.interface";

export class SearchResultProcessor {
  static process(
    response: AIResponse,
  ): AIResponse {
    return {
      ...response,
      message: response.message.trim(),
    };
  }
}