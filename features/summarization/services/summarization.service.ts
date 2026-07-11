import type { SummarizationRequest } from "../contracts/summarization-request";
import type { SummarizationResponse } from "../contracts/summarization-response";

export interface SummarizationService {
  summarize(
    request: SummarizationRequest
  ): Promise<SummarizationResponse>;
}