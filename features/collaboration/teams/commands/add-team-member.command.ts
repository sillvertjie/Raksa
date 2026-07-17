import type { AddTeamMemberDto } from "../dto/add-team-member.dto";

export class AddTeamMemberCommand {
  readonly type = "team-member.add";

  constructor(
    public readonly dto: AddTeamMemberDto,
  ) {}
}