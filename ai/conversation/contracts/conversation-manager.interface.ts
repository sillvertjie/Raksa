import type { Conversation } from "../models/conversation.model";
import type { ConversationMessage } from "../models/conversation-message.model";

export interface ConversationManager {
  create(
    input?: {
      workspaceId?: string;
      userId?: string;
    },
  ): Promise<Conversation>;

  getById(
    id: string,
  ): Promise<Conversation | null>;

  addMessage(
    conversationId: string,
    message: ConversationMessage,
  ): Promise<void>;
}