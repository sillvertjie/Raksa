import type { MembershipRepository } from "../../contracts/membership-repository.interface";

export class WorkspaceContextResolver {
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async resolve(
    userId: string,
  ): Promise<string> {
    const memberships =
      await this.repository.findByUser(
        userId,
      );

    const membership =
      memberships[0];

    if (!membership) {
      throw new Error(
        "Workspace context not found.",
      );
    }

    return membership.workspaceId;
  }
}