import type { WorkspaceAggregationRepository } from "../contracts/workspace-aggregation.repository.interface";
import type { WorkspaceAggregationService } from "../contracts/workspace-aggregation.service.interface";
import type { WorkspaceItem } from "../entities/workspace-item.entity";

export class DefaultWorkspaceAggregationService
  implements WorkspaceAggregationService
{
  constructor(
    private readonly repository: WorkspaceAggregationRepository,
  ) {}

  async getWorkspace(
    userId: string,
  ): Promise<WorkspaceItem[]> {
    return this.repository.getWorkspace(
      userId,
    );
  }
}