import type { WorkspaceActionRequest } from "../../contracts/workspace-action-request";
import type { ActionApproval } from "../contracts/action-approval.interface";
import type { ApprovalService } from "../contracts/approval.service";

export class DefaultApprovalService
  implements ApprovalService
{
  async requestApproval(
    request: WorkspaceActionRequest,
  ): Promise<ActionApproval> {
    void request;

    return {
      approved: false,
      reason: "Waiting for user approval.",
    };
  }
}