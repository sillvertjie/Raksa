import type { SummarizationResponse } from "@/features/summarization/contracts/summarization-response";

export interface SummaryOutputManager {
  manage(
    response: SummarizationResponse,
  ): SummarizationResponse;
}
