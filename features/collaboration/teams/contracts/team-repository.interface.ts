import type { Team } from "../entities/team.entity";

export interface TeamRepository {
  create(
    team: Team,
  ): Promise<Team>;

  findById(
    id: string,
  ): Promise<Team | null>;

  findByWorkspace(
    workspaceId: string,
  ): Promise<Team[]>;

  delete(
    id: string,
  ): Promise<void>;
}