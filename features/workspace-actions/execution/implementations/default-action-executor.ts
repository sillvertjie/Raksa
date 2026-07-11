import type { ActionExecutor } from "../contracts/action-executor.interface";
import type { WorkspaceActionRequest } from "../../contracts/workspace-action-request";
import type { WorkspaceActionResult } from "../../contracts/workspace-action-result";

export class DefaultActionExecutor
  implements ActionExecutor
{
  async execute(
    request: WorkspaceActionRequest,
  ): Promise<WorkspaceActionResult> {
    return {
      success: false,
      message: `Action ${request.action.type} is not implemented.`,
    };
  }
}