import type { InvitationRepository } from "../contracts/invitation-repository.interface";
import type { WorkspaceInvitation } from "../entities/workspace-invitation.entity";

export class InMemoryInvitationRepository
  implements InvitationRepository
{
  private readonly invitations = new Map<string, WorkspaceInvitation>();

  async create(
    invitation: WorkspaceInvitation,
  ): Promise<WorkspaceInvitation> {
    this.invitations.set(invitation.id, invitation);

    return invitation;
  }

  async update(
    invitation: WorkspaceInvitation,
  ): Promise<WorkspaceInvitation> {
    this.invitations.set(invitation.id, invitation);

    return invitation;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.invitations.delete(id);
  }

  async findById(
    id: string,
  ): Promise<WorkspaceInvitation | null> {
    return this.invitations.get(id) ?? null;
  }

  async findByToken(
    token: string,
  ): Promise<WorkspaceInvitation | null> {
    for (const invitation of this.invitations.values()) {
      if (invitation.token === token) {
        return invitation;
      }
    }

    return null;
  }

  async findByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceInvitation[]> {
    return [...this.invitations.values()].filter(
      (invitation) => invitation.workspaceId === workspaceId,
    );
  }
}