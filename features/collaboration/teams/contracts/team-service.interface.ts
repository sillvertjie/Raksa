import type { CreateTeamDto } from "../dto/create-team.dto";
import type { Team } from "../entities/team.entity";

export interface TeamService {
  create(
    dto: CreateTeamDto,
  ): Promise<Team>;

  getById(
    id: string,
  ): Promise<Team | null>;

  getByWorkspace(
    workspaceId: string,
  ): Promise<Team[]>;

  delete(
    id: string,
  ): Promise<void>;
}