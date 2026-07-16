import type { DomainEvent } from "./domain-event.interface";

export interface Projection {
  readonly name: string;

  supports(event: DomainEvent): boolean;

  project(event: DomainEvent): Promise<void>;
}