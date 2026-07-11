import type { Query } from "./query.interface";
import type { QueryHandler } from "./query-handler.interface";

export interface QueryBus {
  execute<TResult>(query: Query): TResult;

  register(
    queryType: string,
    handler: QueryHandler,
  ): void;
}