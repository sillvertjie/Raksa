import { apiFetch } from "@/lib/api/client";

import type { ProductivityRequestDto } from "../dto/productivity-request.dto";
import type { ProductivityOutput } from "../output/contracts/productivity-output.manager.interface";

const API_URL = "/api/productivity";

export function processProductivity(
  dto: ProductivityRequestDto,
) {
  return apiFetch<ProductivityOutput>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(dto),
    },
  );
}