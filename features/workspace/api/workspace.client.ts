import { apiFetch } from "@/lib/api/client";

import type { WorkspaceReadPage } from "../entities/workspace-read-page.entity";


const API_URL =
  "/api/workspace/read";


export function getWorkspace(
  workspaceId: string,
) {
  const params =
    new URLSearchParams({
      workspaceId,
    });

  return apiFetch<WorkspaceReadPage>(
    `${API_URL}?${params.toString()}`,
    {
      method: "GET",
    },
  );
}