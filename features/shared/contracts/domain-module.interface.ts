import type { BoundedContext } from "./bounded-context.interface";

export interface DomainModule {
  /**
   * Domain metadata.
   */
  readonly context: BoundedContext;
}