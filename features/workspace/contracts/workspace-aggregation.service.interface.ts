import type { WorkspaceItem } from "../entities/workspace-item.entity";

export interface WorkspaceAggregationService {
  getWorkspace(
    userId: string,
  ): Promise<WorkspaceItem[]>;
}