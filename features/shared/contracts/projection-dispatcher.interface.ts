import type { DomainEvent } from "./domain-event.interface";
import type { Projection } from "./projection.interface";

export interface ProjectionDispatcher {
  register(projection: Projection): void;

  unregister(projectionName: string): void;

  dispatch(event: DomainEvent): Promise<void>;
}