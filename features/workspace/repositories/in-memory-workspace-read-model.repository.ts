import {
  WorkspaceReadModelEntity,
  WorkspaceReadModelPage,
} from "../entities/workspace-read-model.entity";

import type {
  WorkspaceReadModelRepository,
  WorkspaceReadModelListOptions,
} from "../contracts/workspace-read-model.repository.interface";

export class InMemoryWorkspaceReadModelRepository
  implements WorkspaceReadModelRepository
{
  private readonly items = new Map<
    string,
    WorkspaceReadModelEntity
  >();

  async save(
    entity: WorkspaceReadModelEntity,
  ): Promise<WorkspaceReadModelEntity> {
    this.items.set(entity.id, entity);

    return entity;
  }

  async update(
    entity: WorkspaceReadModelEntity,
  ): Promise<WorkspaceReadModelEntity> {
    this.items.set(entity.id, entity);

    return entity;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.items.delete(id);
  }

  async findById(
    id: string,
  ): Promise<WorkspaceReadModelEntity | null> {
    return this.items.get(id) ?? null;
  }

  async findByItemId(
    itemId: string,
  ): Promise<WorkspaceReadModelEntity | null> {
    return (
      Array.from(this.items.values()).find(
        (item) => item.itemId === itemId,
      ) ?? null
    );
  }

  async list(
    options: WorkspaceReadModelListOptions,
  ): Promise<WorkspaceReadModelPage> {
    const page = options.page ?? 1;
    const limit = options.limit ?? 20;

    let result = Array.from(
      this.items.values(),
    ).filter(
      (item) =>
        item.workspaceId ===
        options.workspaceId,
    );

    if (options.permissionScope) {
      result = result.filter(
        (item) =>
          item.permissionScope ===
          options.permissionScope,
      );
    }

    if (options.itemType) {
      result = result.filter(
        (item) =>
          item.itemType === options.itemType,
      );
    }

    result.sort(
      (a, b) =>
        b.updatedAt.getTime() -
        a.updatedAt.getTime(),
    );

    const total = result.length;

    const start =
      (page - 1) * limit;

    const items = result.slice(
      start,
      start + limit,
    );

    return {
      items,
      total,
      page,
      limit,
      hasNext:
        start + limit < total,
      hasPrevious: page > 1,
    };
  }
}