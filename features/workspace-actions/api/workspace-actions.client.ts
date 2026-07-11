import { apiFetch } from "@/lib/api/client";

import type { ExecuteWorkspaceActionDto } from "../dto/execute-workspace-action.dto";
import type { WorkspaceActionResult } from "../contracts/workspace-action-result";

const API_URL = "/api/workspace-actions";

export function executeWorkspaceAction(
  dto: ExecuteWorkspaceActionDto,
) {
  return apiFetch<WorkspaceActionResult>(
    API_URL,
    {
      method: "POST",
      body: JSON.stringify(dto),
    },
  );
}