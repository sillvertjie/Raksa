import type { WorkspaceActionResult } from "../../contracts/workspace-action-result";

export interface ActionResultManager {
  manage(
    result: WorkspaceActionResult,
  ): Promise<WorkspaceActionResult>;
}