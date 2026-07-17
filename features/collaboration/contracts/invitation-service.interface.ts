import type { CreateInvitationDto } from "../dto/create-invitation.dto";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

export interface InvitationService {
  create(
    dto: CreateInvitationDto,
  ): Promise<WorkspaceInvitation>;

  accept(
    token: string,
  ): Promise<WorkspaceInvitation>;

  revoke(
    id: string,
  ): Promise<void>;

  getById(
    id: string,
  ): Promise<WorkspaceInvitation | null>;

  listWorkspaceInvitations(
    workspaceId: string,
  ): Promise<WorkspaceInvitation[]>;
}