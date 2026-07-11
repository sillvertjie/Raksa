import type { WorkspaceActionRequest } from "../contracts/workspace-action-request";

export interface WorkspaceActionPlannerService {
  plan(
    input: string,
    userId: string,
  ): Promise<WorkspaceActionRequest>;
}