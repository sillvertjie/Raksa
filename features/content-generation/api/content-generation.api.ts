import { apiFetch } from "@/lib/api/client";

import type { ContentGenerationDto } from "../dto/content-generation.dto";
import type { ContentGenerationResponse } from "../contracts/content-generation-response";

const API_URL = "/api/content-generation";

export function generateContent(
  dto: ContentGenerationDto,
) {
  return apiFetch<ContentGenerationResponse>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(dto),
    },
  );
}