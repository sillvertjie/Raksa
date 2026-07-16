import type { DomainEvent } from "./domain-event.interface";

export type EventHandler<
  T extends DomainEvent = DomainEvent,
> = (
  event: T,
) => void | Promise<void>;