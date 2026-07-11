import { useState } from "react";

import type { ExecuteWorkspaceActionDto } from "../dto/execute-workspace-action.dto";
import type { WorkspaceActionResult } from "../contracts/workspace-action-result";

import { executeWorkspaceAction } from "../api/workspace-actions.client";

export function useWorkspaceActions() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<WorkspaceActionResult | null>(null);

  async function execute(
    dto: ExecuteWorkspaceActionDto,
  ) {
    setLoading(true);

    try {
      const response =
        await executeWorkspaceAction(dto);

      setResult(response);

      return response;
    } finally {
      setLoading(false);
    }
  }

  return {
    execute,
    loading,
    result,
  };
}