import type { Query } from "../../shared/contracts/query.interface";

export class GetProjectQuery implements Query {
  readonly type = "project.get";

  constructor(
    public readonly id: string,
  ) {}
}