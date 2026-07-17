import type { CreateTeamDto } from "../dto/create-team.dto";

export class CreateTeamCommand {
  readonly type = "team.create";

  constructor(
    public readonly dto: CreateTeamDto,
  ) {}
}