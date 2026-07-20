import {
  WorkspaceReadModelEntity,
  WorkspaceReadModelPage,
} from "../entities/workspace-read-model.entity";

import type {
  WorkspaceReadModelRepository,
  WorkspaceReadModelListOptions,
} from "../contracts/workspace-read-model.repository.interface";

interface WorkspaceCursor {
  updatedAt: string;
  id: string;
}

function encodeCursor(
  cursor: WorkspaceCursor,
): string {
  return Buffer.from(
    JSON.stringify(cursor),
  ).toString("base64");
}

function decodeCursor(
  cursor?: string,
): WorkspaceCursor | null {
  if (!cursor) {
    return null;
  }

  return JSON.parse(
    Buffer.from(cursor, "base64").toString(),
  ) as WorkspaceCursor;
}

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
    this.items.set(
      entity.id,
      entity,
    );

    return entity;
  }

  async update(
    entity: WorkspaceReadModelEntity,
  ): Promise<WorkspaceReadModelEntity> {
    this.items.set(
      entity.id,
      entity,
    );

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
        (item) =>
          item.itemId === itemId,
      ) ?? null
    );
  }

  async list(
    options: WorkspaceReadModelListOptions,
  ): Promise<WorkspaceReadModelPage> {
    const limit =
      options.limit ?? 20;

    const cursor =
      decodeCursor(options.cursor);

    let result =
      Array.from(this.items.values())
        .filter(
          (item) =>
            item.workspaceId ===
            options.workspaceId,
        );

    if (options.itemType) {
      result =
        result.filter(
          (item) =>
            item.itemType ===
            options.itemType,
        );
    }

    result.sort(
      (a, b) => {
        const updatedCompare =
          b.updatedAt.getTime() -
          a.updatedAt.getTime();

        if (updatedCompare !== 0) {
          return updatedCompare;
        }

        return b.id.localeCompare(a.id);
      },
    );

    if (cursor) {
      result =
        result.filter(
          (item) => {
            const itemDate =
              item.updatedAt.getTime();

            const cursorDate =
              new Date(
                cursor.updatedAt,
              ).getTime();

            if (itemDate < cursorDate) {
              return true;
            }

            if (itemDate > cursorDate) {
              return false;
            }

            return item.id < cursor.id;
          },
        );
    }

    const items =
      result.slice(
        0,
        limit + 1,
      );

    const hasNext =
      items.length > limit;

    const paginatedItems =
      hasNext
        ? items.slice(0, limit)
        : items;

    const lastItem =
      paginatedItems[
        paginatedItems.length - 1
      ];

    return {
      items: paginatedItems,
      nextCursor:
        hasNext && lastItem
          ? encodeCursor({
              updatedAt:
                lastItem.updatedAt.toISOString(),
              id: lastItem.id,
            })
          : undefined,
    };
  }
}