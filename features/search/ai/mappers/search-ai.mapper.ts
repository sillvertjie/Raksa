import type { AIRequest } from "@/ai/service/contracts/ai-service.interface";

import type { AISearchRequest } from "../contracts/ai-search-request";

export class SearchAIMapper {
  static toAIRequest(
    request: AISearchRequest,
  ): AIRequest {
    return {
      message: request.query,
      options: {
        context: request.context,
        limit: request.limit,
      },
    };
  }
}