import type { AddTeamMemberDto } from "../dto/add-team-member.dto";

export class TeamMemberValidator {
  static validateAdd(
    dto: AddTeamMemberDto,
  ): void {
    if (!dto.teamId) {
      throw new Error(
        "Team id is required.",
      );
    }

    if (!dto.membershipId) {
      throw new Error(
        "Membership id is required.",
      );
    }
  }
}