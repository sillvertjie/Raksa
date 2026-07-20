import type { WorkspaceItem } from "./workspace-item.entity";

export interface WorkspaceReadPage {
  items: WorkspaceItem[];

  nextCursor?: string;
}