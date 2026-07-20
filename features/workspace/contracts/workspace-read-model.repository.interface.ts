import {
  WorkspaceReadModelEntity,
  WorkspaceReadModelPage,
} from "../entities/workspace-read-model.entity";

export interface WorkspaceReadModelListOptions {
  workspaceId: string;

  cursor?: string;

  limit?: number;

  itemType?: WorkspaceReadModelEntity["itemType"];
}

export interface WorkspaceReadModelRepository {
  save(
    entity: WorkspaceReadModelEntity,
  ): Promise<WorkspaceReadModelEntity>;

  update(
    entity: WorkspaceReadModelEntity,
  ): Promise<WorkspaceReadModelEntity>;

  delete(
    id: string,
  ): Promise<void>;

  findById(
    id: string,
  ): Promise<WorkspaceReadModelEntity | null>;

  findByItemId(
    itemId: string,
  ): Promise<WorkspaceReadModelEntity | null>;

  list(
    options: WorkspaceReadModelListOptions,
  ): Promise<WorkspaceReadModelPage>;
}