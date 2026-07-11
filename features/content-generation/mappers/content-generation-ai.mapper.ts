import type { AIRequest } from "@/ai/service/contracts/ai-service.interface";
import type { ContentGenerationRequest } from "../contracts/content-generation-request";

export class ContentGenerationAIMapper {
  static toAIRequest(
    request: ContentGenerationRequest,
  ): AIRequest {
    return {
      message: request.content,
      options: {
        instruction: request.instruction,
        ...request.options,
      },
    };
  }
}