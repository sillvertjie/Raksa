import type { SummarizeDto } from "../dto/summarize.dto";
import type { SummarizationRequest } from "../contracts/summarization-request";

export class SummarizationContextBuilder {
  build(dto: SummarizeDto): SummarizationRequest {
    return {
      content: dto.content,
      options: {
        maxLength: dto.maxLength,
        style: dto.style,
        language: dto.language,
      },
    };
  }
}