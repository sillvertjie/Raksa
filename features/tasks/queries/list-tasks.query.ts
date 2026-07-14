import type { Query } from "../../shared/contracts/query.interface";

export class ListTasksQuery implements Query {
  readonly type = "task.list";
}