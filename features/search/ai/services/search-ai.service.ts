import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { AISearchRequest } from "../contracts/ai-search-request";

import { SearchAIMapper } from "../mappers/search-ai.mapper";

export class SearchAIService {
  constructor(
    private readonly aiService: AIService,
  ) {}

  async search(
    request: AISearchRequest,
  ) {
    const aiRequest =
      SearchAIMapper.toAIRequest(request);

    return this.aiService.execute(
      aiRequest,
    );
  }
}