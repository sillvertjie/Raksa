import type { MembershipRepository } from "../contracts/membership-repository.interface";

export function seedDevelopmentMembership(
  repository: MembershipRepository,
  userId: string,
): void {
  void repository.create({
    id: crypto.randomUUID(),
    workspaceId: "workspace-demo",
    userId,
    role: "OWNER",
    status: "ACTIVE",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}