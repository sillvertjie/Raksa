import { apiFetch } from "@/lib/api/client";

import type { Summary } from "../types/summary";

const API_URL = "/api/summary";

export function getSummary() {
  return apiFetch<Summary>(API_URL);
}