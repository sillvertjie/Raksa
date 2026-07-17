import type { TeamMemberRepository } from "../contracts/team-member-repository.interface";
import type { TeamMember } from "../entities/team-member.entity";

export class InMemoryTeamMemberRepository
  implements TeamMemberRepository
{
  private readonly members = new Map<
    string,
    TeamMember
  >();

  async create(
    member: TeamMember,
  ): Promise<TeamMember> {
    this.members.set(
      member.id,
      member,
    );

    return member;
  }

  async findById(
    id: string,
  ): Promise<TeamMember | null> {
    return this.members.get(id) ?? null;
  }

  async findByTeam(
    teamId: string,
  ): Promise<TeamMember[]> {
    return [
      ...this.members.values(),
    ].filter(
      (member) =>
        member.teamId === teamId,
    );
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.members.delete(id);
  }
}