import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { RealtimeAdapter } from "../contracts/realtime-adapter.interface";
import type { RealtimeDistributor } from "../contracts/realtime-distributor.interface";

export class RealtimeEventDistributor
  implements RealtimeDistributor
{
  constructor(
    private readonly adapter: RealtimeAdapter,
  ) {}

  async distribute(
    event: DomainEvent,
  ): Promise<void> {
    await this.adapter.publish(
      "realtime",
      {
        event: event.type,
        payload: event.payload,
      },
    );
  }
}