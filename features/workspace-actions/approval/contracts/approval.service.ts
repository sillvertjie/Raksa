import type { WorkspaceActionRequest } from "../../contracts/workspace-action-request";
import type { ActionApproval } from "./action-approval.interface";

export interface ApprovalService {
  requestApproval(
    request: WorkspaceActionRequest,
  ): Promise<ActionApproval>;
}