import type { AIResponse } from "@/ai/service/contracts/ai-service.interface";

import type { SummarizationResponse } from "../contracts/summarization-response";

export class SummarizationResponseMapper {
  static fromAIResponse(
    response: AIResponse,
  ): SummarizationResponse {
    return {
      summary: response.message,
    };
  }
}
