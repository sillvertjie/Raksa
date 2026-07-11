import type { Query } from "./query.interface";

export interface QueryHandler<
  TQuery extends Query = Query,
  TResult = unknown,
> {
  execute(query: TQuery): TResult;
}