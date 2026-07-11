import type { ContentGenerationDto } from "../dto/content-generation.dto";
import type { ContentGenerationRequest } from "../contracts/content-generation-request";

export class ContentGenerationContextBuilder {
  build(
    dto: ContentGenerationDto,
  ): ContentGenerationRequest {
    return {
      content: dto.content,
      instruction: dto.instruction,
      options: dto.options,
    };
  }
}