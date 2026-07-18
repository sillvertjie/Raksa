import { apiFetch } from "@/lib/api/client";

import type { PresenceResponseDto } from "../dto/presence-response.dto";


export const presenceApi = {
  async getWorkspacePresence(): Promise<
    PresenceResponseDto[]
  > {
    return apiFetch<PresenceResponseDto[]>(
      "/api/presence",
      {
        method: "GET",
      },
    );
  },
};