import type { ContentGenerationRequest } from "../contracts/content-generation-request";
import type { ContentGenerationResponse } from "../contracts/content-generation-response";

export interface ContentGenerationService {
  generate(
    request: ContentGenerationRequest,
  ): Promise<ContentGenerationResponse>;
}