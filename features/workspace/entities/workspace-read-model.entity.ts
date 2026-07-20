import { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type WorkspaceItemType =
  | "project"
  | "task"
  | "knowledge"
  | "comment";

export interface WorkspaceReadModelEntity extends BaseEntity {
  workspaceId: string;

  itemId: string;

  itemType: WorkspaceItemType;

  title: string;

  description?: string;

  searchableText: string;

  actorId?: string;

  permissionScope: string;

  sourceEvent: string;

  updatedAt: Date;
}

export interface WorkspaceReadModelPage {
  items: WorkspaceReadModelEntity[];

  nextCursor?: string;
  
}