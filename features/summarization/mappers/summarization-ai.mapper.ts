import type { AIRequest } from "@/ai/service/contracts/ai-service.interface";
import type { SummarizationRequest } from "../contracts/summarization-request";

export class SummarizationAIMapper {
  static toAIRequest(
    request: SummarizationRequest,
  ): AIRequest {
    return {
      message: request.content,
      options: request.options
        ? {
            ...request.options,
          }
        : undefined,
    };
  }
}
