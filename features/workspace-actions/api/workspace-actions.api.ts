import type { WorkspaceActionService } from "../services/workspace-action.service";
import type { ExecuteWorkspaceActionDto } from "../dto/execute-workspace-action.dto";

export class WorkspaceActionsApi {
  constructor(
    private readonly service: WorkspaceActionService,
  ) {}

  execute(
    dto: ExecuteWorkspaceActionDto,
  ) {
    return this.service.execute(dto);
  }
}