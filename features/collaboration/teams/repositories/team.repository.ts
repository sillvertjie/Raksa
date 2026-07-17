import type { TeamRepository } from "../contracts/team-repository.interface";
import type { Team } from "../entities/team.entity";

export class InMemoryTeamRepository
  implements TeamRepository
{
  private readonly teams = new Map<
    string,
    Team
  >();

  async create(
    team: Team,
  ): Promise<Team> {
    this.teams.set(
      team.id,
      team,
    );

    return team;
  }

  async findById(
    id: string,
  ): Promise<Team | null> {
    return this.teams.get(id) ?? null;
  }

  async findByWorkspace(
    workspaceId: string,
  ): Promise<Team[]> {
    return [
      ...this.teams.values(),
    ].filter(
      (team) =>
        team.workspaceId === workspaceId,
    );
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.teams.delete(id);
  }
}