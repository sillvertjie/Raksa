import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { ContentGenerationService } from "./content-generation.service";
import type { ContentGenerationRequest } from "../contracts/content-generation-request";
import type { ContentGenerationResponse } from "../contracts/content-generation-response";

import { ContentGenerationAIMapper } from "../mappers/content-generation-ai.mapper";
import { ContentGenerationResponseMapper } from "../mappers/content-generation-response.mapper";

export class DefaultContentGenerationService
  implements ContentGenerationService
{
  constructor(
    private readonly aiService: AIService,
  ) {}

  async generate(
    request: ContentGenerationRequest,
  ): Promise<ContentGenerationResponse> {
    const aiRequest =
      ContentGenerationAIMapper.toAIRequest(request);

    const aiResponse =
      await this.aiService.execute(aiRequest);

    return ContentGenerationResponseMapper.fromAIResponse(
      aiResponse,
    );
  }
}