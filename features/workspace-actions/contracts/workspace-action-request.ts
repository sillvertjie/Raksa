import type { WorkspaceAction } from "./workspace-action.interface";

export interface WorkspaceActionRequest {
  action: WorkspaceAction;
  userId: string;
}