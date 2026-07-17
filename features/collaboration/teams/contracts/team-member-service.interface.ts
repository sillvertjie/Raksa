import type { AddTeamMemberDto } from "../dto/add-team-member.dto";
import type { TeamMember } from "../entities/team-member.entity";

export interface TeamMemberService {
  add(
    dto: AddTeamMemberDto,
  ): Promise<TeamMember>;

  getByTeam(
    teamId: string,
  ): Promise<TeamMember[]>;

  remove(
    id: string,
  ): Promise<void>;
}