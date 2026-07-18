import { apiFetch } from "@/lib/api/client";

import type { PresenceResponseDto } from "../dto/presence-response.dto";

const API_URL = "/api/presence";

export const presenceApi = {
  async getWorkspacePresence(): Promise<
    PresenceResponseDto[]
  > {
    return apiFetch<
      PresenceResponseDto[]
    >(
      API_URL,
      {
        method: "GET",
      },
    );
  },
};