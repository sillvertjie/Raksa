import { randomUUID } from "crypto";

import type { ConversationManager } from "@/ai/conversation/contracts/conversation-manager.interface";
import type { ConversationMessage } from "@/ai/conversation/models/conversation-message.model";
import type { Conversation } from "@/ai/conversation/models/conversation.model";
import type { ConversationStorage } from "@/ai/storage/contracts/conversation-storage.interface";

export class DefaultConversationManager
  implements ConversationManager
{
  constructor(
    private readonly storage: ConversationStorage,
  ) {}

  async create(
    input?: {
      workspaceId?: string;
      userId?: string;
    },
  ): Promise<Conversation> {
    const conversation: Conversation = {
      id: randomUUID(),

      workspaceId: input?.workspaceId,

      userId: input?.userId,

      messages: [],
    };

    await this.storage.save(conversation);

    return conversation;
  }

  async getById(
    id: string,
  ): Promise<Conversation | null> {
    return this.storage.findById(id);
  }

  async addMessage(
    conversationId: string,
    message: ConversationMessage,
  ): Promise<void> {
    const conversation =
      await this.storage.findById(
        conversationId,
      );

    if (!conversation) {
      throw new Error(
        "Conversation not found",
      );
    }

    conversation.messages ??= [];

    conversation.messages.push(message);

    await this.storage.save(
      conversation,
    );
  }
}