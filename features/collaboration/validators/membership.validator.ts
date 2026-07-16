import type { CreateMembershipDto } from "@/features/collaboration/dto/create-membership.dto";

export function validateCreateMembership(
  dto: CreateMembershipDto
): void {
  if (!dto.workspaceId) {
    throw new Error("Workspace ID is required");
  }

  if (!dto.userId) {
    throw new Error("User ID is required");
  }

  if (!dto.role) {
    throw new Error("Membership role is required");
  }
}