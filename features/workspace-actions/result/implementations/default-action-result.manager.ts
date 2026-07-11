import type { WorkspaceActionResult } from "../../contracts/workspace-action-result";
import type { ActionResultManager } from "../contracts/action-result-manager.interface";

export class DefaultActionResultManager
  implements ActionResultManager
{
  async manage(
    result: WorkspaceActionResult,
  ): Promise<WorkspaceActionResult> {
    return result;
  }
}