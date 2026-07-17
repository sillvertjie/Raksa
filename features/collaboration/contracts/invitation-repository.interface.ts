import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

export interface InvitationRepository {
  create(
    invitation: WorkspaceInvitation,
  ): Promise<WorkspaceInvitation>;

  update(
    invitation: WorkspaceInvitation,
  ): Promise<WorkspaceInvitation>;

  delete(
    id: string,
  ): Promise<void>;

  findById(
    id: string,
  ): Promise<WorkspaceInvitation | null>;

  findByToken(
    token: string,
  ): Promise<WorkspaceInvitation | null>;

  findByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceInvitation[]>;
}