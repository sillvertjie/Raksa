import type { ConversationManager } from "../../conversation/contracts/conversation-manager.interface";
import type { ConversationMessage } from "../../conversation/models/conversation-message.model";
import type { ContextBuilder } from "../../context/contracts/context-builder.interface";
import type { AIService } from "../../service/contracts/ai-service.interface";

import type {
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
    private readonly aiService: AIService,
  ) {}

  async process(
    input: ConversationInput,
  ): Promise<ConversationResult> {
    const conversationId =
      input.conversationId ??
      (
        await this.conversationManager.create({
          workspaceId: input.workspaceId,
          userId: input.userId,
        })
      ).id;

    await this.conversationManager.addMessage(
      conversationId,
      this.createMessage(
        "user",
        input.message,
      ),
    );

    const context =
      await this.contextBuilder.build({
        conversationId,

        additionalContext: {
          workspace: {
            id: input.workspaceId,
          },

          collaboration: {
            userId: input.userId,
          },
        },
      });
    
    const response =
      await this.aiService.execute({
        message: input.message,
        conversationId,
        context,
      });

    await this.conversationManager.addMessage(
      conversationId,
      this.createMessage(
        "assistant",
        response.message,
      ),
    );

    return {
      conversationId,
      message: response.message,
    };
  }

  private createMessage(
    role: "user" | "assistant",
    content: string,
  ): ConversationMessage {
    return {
      role,
      content,
    };
  }
}