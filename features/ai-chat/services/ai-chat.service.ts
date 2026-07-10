import type { ConversationOrchestrator } from "@/ai/orchestration";

import type { SendAIChatDTO } from "../dto/send-ai-chat.dto";

export class AIChatService {
  constructor(
    private readonly conversationOrchestrator: ConversationOrchestrator
  ) {}

  async sendMessage(
    input: SendAIChatDTO
  ) {
    return this.conversationOrchestrator.process({
      conversationId: input.conversationId,
      message: input.message,
    });
  }
}