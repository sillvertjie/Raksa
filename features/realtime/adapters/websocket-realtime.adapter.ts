import type { RealtimeAdapter } from "../contracts/realtime-adapter.interface";
import type { RealtimeMessage } from "../types/realtime-message";

export class WebSocketRealtimeAdapter implements RealtimeAdapter {
  async publish(
    channel: string,
    message: RealtimeMessage
  ): Promise<void> {
    /**
     * WebSocket transport implementation
     * will be connected here in infrastructure phase.
     */

    console.log(
      `[Realtime] channel=${channel}`,
      message
    );
  }
}