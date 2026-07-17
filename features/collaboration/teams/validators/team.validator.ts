import type { CreateTeamDto } from "../dto/create-team.dto";

export class TeamValidator {
  static validateCreate(
    dto: CreateTeamDto,
  ): void {
    if (!dto.workspaceId) {
      throw new Error(
        "Workspace id is required.",
      );
    }

    if (!dto.name) {
      throw new Error(
        "Team name is required.",
      );
    }
  }
}