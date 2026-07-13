import type { Query } from "../../shared/contracts/query.interface";

export class ListProjectsQuery implements Query {
  readonly type = "project.list";
}