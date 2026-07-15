export type WorkspaceItemType =
  | "PROJECT"
  | "TASK"
  | "KNOWLEDGE_DOCUMENT";

export interface WorkspaceItem {
  id: string;

  type: WorkspaceItemType;

  title: string;

  description: string | null;

  status?: string;

  parentId?: string | null;

  createdAt: Date;

  updatedAt: Date;
}