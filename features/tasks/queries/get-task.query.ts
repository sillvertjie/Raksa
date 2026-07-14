import type { Query } from "../../shared/contracts/query.interface";

export class GetTaskQuery implements Query {
  readonly type = "task.get";

  constructor(
    public readonly id: string,
  ) {}
}