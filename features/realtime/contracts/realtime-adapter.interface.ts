import type { RealtimeMessage } from "../types/realtime-message";

export interface RealtimeAdapter {
  publish(
    channel: string,
    message: RealtimeMessage
  ): Promise<void>;
}