import { ConversationManager } from "../../conversation/contracts/conversation-manager.interface";
import { ConversationMessage } from "../../conversation/models/conversation-message.model";
import { ContextBuilder } from "../../context/contracts/context-builder.interface";
import { AIService } from "../../service/contracts/ai-service.interface";

import {
  ConversationInput,
  ConversationOrchestrator,
  ConversationResult,
} from "../contracts/conversation-orchestrator.interface";

export class DefaultConversationOrchestrator
  implements ConversationOrchestrator
{
  constructor(
    private readonly conversationManager: ConversationManager,
    private readonly contextBuilder: ContextBuilder,
    private readonly aiService: AIService
  ) {}

  async process(
    input: ConversationInput
  ): Promise<ConversationResult> {
    const conversationId =
      input.conversationId ??
      (await this.conversationManager.create()).id;

    await this.conversationManager.addMessage(
      conversationId,
      this.createMessage("user", input.message)
    );

    await this.contextBuilder.build({
      conversationId,
    });

    const response = await this.aiService.execute({
      message: input.message,
      conversationId,
    });

    await this.conversationManager.addMessage(
      conversationId,
      this.createMessage("assistant", response.message)
    );

    return {
      conversationId,
      message: response.message,
    };
  }

  private createMessage(
    role: "user" | "assistant",
    content: string
  ): ConversationMessage {
    return {
      role,
      content,
    };
  }
}