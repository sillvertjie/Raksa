import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface RealtimeDistributor {
  distribute(
    event: DomainEvent,
  ): Promise<void>;
}