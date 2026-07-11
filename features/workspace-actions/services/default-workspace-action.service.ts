import type { WorkspaceActionService } from "./workspace-action.service";
import type { ExecuteWorkspaceActionDto } from "../dto/execute-workspace-action.dto";
import type { WorkspaceActionResult } from "../contracts/workspace-action-result";

import type { WorkspaceActionPlannerService } from "./workspace-action-planner.service";
import type { ApprovalService } from "../approval/contracts/approval.service";
import type { ActionExecutor } from "../execution/contracts/action-executor.interface";
import type { ActionResultManager } from "../result/contracts/action-result-manager.interface";

export class DefaultWorkspaceActionService
  implements WorkspaceActionService
{
  constructor(
    private readonly planner: WorkspaceActionPlannerService,
    private readonly approvalService: ApprovalService,
    private readonly executor: ActionExecutor,
    private readonly resultManager: ActionResultManager,
  ) {}

  async execute(
    dto: ExecuteWorkspaceActionDto,
  ): Promise<WorkspaceActionResult> {
    const request =
      await this.planner.plan(
        dto.input,
        dto.userId,
      );

    if (request.action.requiresApproval) {
      const approval =
        await this.approvalService.requestApproval(
          request,
        );

      if (!approval.approved) {
        return this.resultManager.manage({
          success: false,
          message: "Action requires approval.",
        });
      }
    }

    const result =
      await this.executor.execute(
        request,
      );

    return this.resultManager.manage(
      result,
    );
  }
}