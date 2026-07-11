import type { WorkspaceActionRequest } from "../../contracts/workspace-action-request";
import type { WorkspaceActionResult } from "../../contracts/workspace-action-result";

export interface ActionExecutor {
  execute(
    request: WorkspaceActionRequest,
  ): Promise<WorkspaceActionResult>;
}