import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { AISearchRequest } from "../contracts/ai-search-request";
import type { AISearchResponse } from "../contracts/ai-search-response";

import { SearchAIMapper } from "../mappers/search-ai.mapper";
import { SearchResponseMapper } from "../mappers/search-response.mapper";

export class SearchAIService {
  constructor(
    private readonly aiService: AIService,
  ) {}

  async search(
    request: AISearchRequest,
  ): Promise<AISearchResponse> {
    const aiRequest =
      SearchAIMapper.toAIRequest(request);

    const aiResponse =
      await this.aiService.execute(
        aiRequest,
      );

    return SearchResponseMapper.fromAIResponse(
      aiResponse,
    );
  }
}