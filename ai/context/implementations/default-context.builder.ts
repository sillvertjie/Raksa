import type { ContextBuilder, ContextBuildInput, AIContext } from "@/ai/context/contracts/context-builder.interface";
import type { ConversationManager } from "@/ai/conversation/contracts/conversation-manager.interface";

export class DefaultContextBuilder implements ContextBuilder {
  constructor(
    private readonly conversationManager: ConversationManager,
  ) {}

  async build(input: ContextBuildInput): Promise<AIContext> {
    if (!input.conversationId) {
      return {
        content: "",
      };
    }

    const conversation =
      await this.conversationManager.getById(
        input.conversationId,
      );

    if (!conversation || !conversation.messages?.length) {
      return {
        content: "",
      };
    }

    const content = conversation.messages
      .map(
        (message) =>
          `${message.role}: ${message.content}`,
      )
      .join("\n");

    return {
      content,
    };
  }
}