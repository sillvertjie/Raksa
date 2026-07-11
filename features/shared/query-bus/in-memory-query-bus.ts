import type { QueryBus } from "../contracts/query-bus.interface";
import type { Query } from "../contracts/query.interface";
import type { QueryHandler } from "../contracts/query-handler.interface";

export class InMemoryQueryBus implements QueryBus {
  private readonly handlers = new Map<string, QueryHandler>();

  execute<TResult>(query: Query): TResult {
    const handler = this.handlers.get(query.type);

    if (!handler) {
      throw new Error(
        `No query handler registered for "${query.type}".`,
      );
    }

    return handler.execute(query) as TResult;
  }

  register(
    queryType: string,
    handler: QueryHandler,
  ): void {
    this.handlers.set(queryType, handler);
  }
}