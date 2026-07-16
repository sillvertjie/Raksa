import type { DomainEvent } from "../contracts/domain-event.interface";
import type { ProjectionStore } from "../contracts/projection-store.interface";

export class InMemoryProjectionStore implements ProjectionStore {
  private readonly events: DomainEvent[] = [];

  async save(event: DomainEvent): Promise<void> {
    this.events.push(event);
  }

  async reset(): Promise<void> {
    this.events.length = 0;
  }
}