import type { CreateCollaborationSessionDto } from "../dto/create-collaboration-session.dto";

export class CollaborationSessionValidator {
  static validateCreate(
    dto: CreateCollaborationSessionDto,
  ): void {
    if (!dto.workspaceId) {
      throw new Error(
        "Workspace id is required",
      );
    }

    if (!dto.startedBy) {
      throw new Error(
        "Started by is required",
      );
    }
  }
}