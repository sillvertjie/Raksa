import type { SummarizationResponse } from "@/features/summarization/contracts/summarization-response";

import type { SummaryOutputManager } from "../contracts/summary-output.manager.interface";

export class DefaultSummaryOutputManager
  implements SummaryOutputManager
{
  manage(
    response: SummarizationResponse,
  ): SummarizationResponse {
    return {
      summary: response.summary.trim(),
    };
  }
}
