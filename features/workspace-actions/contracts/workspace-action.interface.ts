export interface WorkspaceAction {
  type: string;
  payload: unknown;
  requiresApproval: boolean;
}