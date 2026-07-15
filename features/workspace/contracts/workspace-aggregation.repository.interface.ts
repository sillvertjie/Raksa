import type { WorkspaceItem } from "../entities/workspace-item.entity";

export interface WorkspaceAggregationRepository {
  getWorkspace(
    userId: string,
  ): Promise<WorkspaceItem[]>;
}