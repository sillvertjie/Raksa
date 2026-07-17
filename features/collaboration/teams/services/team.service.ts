import type { TeamRepository } from "../contracts/team-repository.interface";
import type { TeamService } from "../contracts/team-service.interface";
import type { CreateTeamDto } from "../dto/create-team.dto";
import type { Team } from "../entities/team.entity";

import { TeamValidator } from "../validators/team.validator";

export class DefaultTeamService
  implements TeamService
{
  constructor(
    private readonly repository: TeamRepository,
  ) {}

  async create(
    dto: CreateTeamDto,
  ): Promise<Team> {
    TeamValidator.validateCreate(dto);

    const now = new Date();

    const team: Team = {
      id: crypto.randomUUID(),
      workspaceId: dto.workspaceId,
      name: dto.name.trim(),
      description:
        dto.description ?? null,
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.create(team);
  }

  async getById(
    id: string,
  ): Promise<Team | null> {
    return this.repository.findById(id);
  }

  async getByWorkspace(
    workspaceId: string,
  ): Promise<Team[]> {
    return this.repository.findByWorkspace(
      workspaceId,
    );
  }

  async delete(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }
}