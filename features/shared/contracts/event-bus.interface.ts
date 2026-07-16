import type { DomainEvent } from "./domain-event.interface";
import type { EventHandler } from "./event-handler.type";

export interface EventBus {
  publish(
    event: DomainEvent,
  ): Promise<void>;

  subscribe(
    eventType: string,
    handler: EventHandler,
  ): () => void;
}