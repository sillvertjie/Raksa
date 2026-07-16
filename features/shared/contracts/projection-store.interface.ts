import type { DomainEvent } from "./domain-event.interface";

export interface ProjectionStore {
  save(event: DomainEvent): Promise<void>;

  reset(): Promise<void>;
}