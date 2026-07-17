import type { TeamMemberRepository } from "../contracts/team-member-repository.interface";
import type { TeamMemberService } from "../contracts/team-member-service.interface";
import type { AddTeamMemberDto } from "../dto/add-team-member.dto";
import type { TeamMember } from "../entities/team-member.entity";

import { TeamMemberValidator } from "../validators/team-member.validator";

export class DefaultTeamMemberService
  implements TeamMemberService
{
  constructor(
    private readonly repository: TeamMemberRepository,
  ) {}

  async add(
    dto: AddTeamMemberDto,
  ): Promise<TeamMember> {
    TeamMemberValidator.validateAdd(dto);

    const now = new Date();

    const member: TeamMember = {
      id: crypto.randomUUID(),
      teamId: dto.teamId,
      membershipId: dto.membershipId,
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.create(member);
  }

  async getByTeam(
    teamId: string,
  ): Promise<TeamMember[]> {
    return this.repository.findByTeam(teamId);
  }

  async remove(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }
}