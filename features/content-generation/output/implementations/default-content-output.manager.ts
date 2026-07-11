import type { ContentGenerationResponse } from "@/features/content-generation/contracts/content-generation-response";

import type { ContentOutputManager } from "../contracts/content-output.manager.interface";

export class DefaultContentOutputManager
  implements ContentOutputManager
{
  manage(
    response: ContentGenerationResponse,
  ): ContentGenerationResponse {
    return response;
  }
}