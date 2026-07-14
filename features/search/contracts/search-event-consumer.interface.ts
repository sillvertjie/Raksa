import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface SearchEventConsumer {
  register(): void;

  handle(
    event: DomainEvent,
  ): Promise<void>;
}