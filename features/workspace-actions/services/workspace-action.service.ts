import type { ExecuteWorkspaceActionDto } from "../dto/execute-workspace-action.dto";
import type { WorkspaceActionResult } from "../contracts/workspace-action-result";

export interface WorkspaceActionService {
  execute(
    dto: ExecuteWorkspaceActionDto,
  ): Promise<WorkspaceActionResult>;
}