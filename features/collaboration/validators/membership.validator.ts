import type { CreateMembershipDto } from "../dto/create-membership.dto";

export class MembershipValidator {
  static validateCreate(
    dto: CreateMembershipDto,
  ): void {
    if (!dto.workspaceId) {
      throw new Error("Workspace ID is required.");
    }

    if (!dto.userId) {
      throw new Error("User ID is required.");
    }

    if (!dto.role) {
      throw new Error("Membership role is required.");
    }
  }
}