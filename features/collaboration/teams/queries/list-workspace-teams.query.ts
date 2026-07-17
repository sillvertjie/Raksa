export class ListWorkspaceTeamsQuery {
  readonly type = "team.list";

  constructor(
    public readonly workspaceId: string,
  ) {}
}