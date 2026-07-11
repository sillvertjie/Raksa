import type { WorkspaceActionPlannerService } from "./workspace-action-planner.service";

import type { WorkspaceActionRequest } from "../contracts/workspace-action-request";

export class DefaultWorkspaceActionPlannerService
  implements WorkspaceActionPlannerService
{
  async plan(
    input: string,
    userId: string,
  ): Promise<WorkspaceActionRequest> {
    return {
      userId,
      action: {
        type: "unknown",
        payload: {
          input,
        },
        requiresApproval: true,
      },
    };
  }
}