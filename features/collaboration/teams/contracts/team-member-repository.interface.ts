import type { TeamMember } from "../entities/team-member.entity";

export interface TeamMemberRepository {
  create(
    member: TeamMember,
  ): Promise<TeamMember>;

  findById(
    id: string,
  ): Promise<TeamMember | null>;

  findByTeam(
    teamId: string,
  ): Promise<TeamMember[]>;

  delete(
    id: string,
  ): Promise<void>;
}