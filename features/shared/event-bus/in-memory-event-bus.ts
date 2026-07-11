import type { DomainEvent } from "../contracts/domain-event.interface";
import type { EventBus } from "../contracts/event-bus.interface";
import type { EventHandler } from "../contracts/event-handler.type";

export class InMemoryEventBus implements EventBus {
  private readonly handlers = new Map<string, Set<EventHandler>>();

  publish(event: DomainEvent): void {
    const handlers = this.handlers.get(event.type);

    if (!handlers) {
      return;
    }

    for (const handler of handlers) {
      handler(event);
    }
  }

  subscribe(
    eventType: string,
    handler: EventHandler,
  ): () => void {
    let handlers = this.handlers.get(eventType);

    if (!handlers) {
      handlers = new Set<EventHandler>();
      this.handlers.set(eventType, handlers);
    }

    handlers.add(handler);

    return () => {
      const currentHandlers = this.handlers.get(eventType);

      if (!currentHandlers) {
        return;
      }

      currentHandlers.delete(handler);

      if (currentHandlers.size === 0) {
        this.handlers.delete(eventType);
      }
    };
  }
}