import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { SummarizationService } from "./summarization.service";
import type { SummarizationRequest } from "../contracts/summarization-request";
import type { SummarizationResponse } from "../contracts/summarization-response";

import { SummarizationAIMapper } from "../mappers/summarization-ai.mapper";
import { SummarizationResponseMapper } from "../mappers/summarization-response.mapper";

import type { SummaryOutputManager } from "../output/contracts/summary-output.manager.interface";

export class DefaultSummarizationService
  implements SummarizationService
{
  constructor(
    private readonly aiService: AIService,
    private readonly outputManager: SummaryOutputManager,
  ) {}

  async summarize(
    request: SummarizationRequest,
  ): Promise<SummarizationResponse> {
    const aiRequest =
      SummarizationAIMapper.toAIRequest(request);

    const aiResponse =
      await this.aiService.execute(aiRequest);

    const summary =
      SummarizationResponseMapper.fromAIResponse(
        aiResponse,
      );

    return this.outputManager.manage(summary);
  }
}
