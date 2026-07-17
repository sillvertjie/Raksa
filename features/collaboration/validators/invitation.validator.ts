import type { CreateInvitationDto } from "../dto/create-invitation.dto";

export function validateCreateInvitation(
  dto: CreateInvitationDto,
): void {
  if (!dto.workspaceId.trim()) {
    throw new Error("Workspace ID is required.");
  }

  if (!dto.email.trim()) {
    throw new Error("Email is required.");
  }

  if (!dto.role) {
    throw new Error("Invitation role is required.");
  }

  if (!(dto.expiresAt instanceof Date)) {
    throw new Error("Expiration date is invalid.");
  }

  if (dto.expiresAt.getTime() <= Date.now()) {
    throw new Error("Expiration date must be in the future.");
  }
}