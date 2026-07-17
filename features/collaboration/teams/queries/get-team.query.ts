export class GetTeamQuery {
  readonly type = "team.get";

  constructor(
    public readonly id: string,
  ) {}
}