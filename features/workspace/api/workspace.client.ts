import { apiFetch } from "@/lib/api/client";

import type { WorkspaceItem } from "../entities/workspace-item.entity";


const API_URL = "/api/workspace";


export function getWorkspace() {
  return apiFetch<WorkspaceItem[]>(
    API_URL,
    {
      method: "GET",
    },
  );
}