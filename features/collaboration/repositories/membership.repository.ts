import type { MembershipRepository } from "../contracts/membership-repository.interface";
import type { WorkspaceMembership } from "../entities/workspace-membership.entity";

export class InMemoryMembershipRepository
  implements MembershipRepository
{
  private readonly memberships = new Map<
    string,
    WorkspaceMembership
  >();

  async create(
    membership: WorkspaceMembership,
  ): Promise<WorkspaceMembership> {
    this.memberships.set(
      membership.id,
      membership,
    );

    return membership;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.memberships.delete(id);
  }

  async findById(
    id: string,
  ): Promise<WorkspaceMembership | null> {
    return this.memberships.get(id) ?? null;
  }

  async findByWorkspace(
    workspaceId: string,
  ): Promise<WorkspaceMembership[]> {
    return [...this.memberships.values()].filter(
      (membership) =>
        membership.workspaceId === workspaceId,
    );
  }
async findByUser(
  userId: string,
): Promise<WorkspaceMembership[]> {
  return [
    ...this.memberships.values(),
  ].filter(
    (membership) =>
      membership.userId === userId &&
      membership.status === "ACTIVE",
  );
}
}