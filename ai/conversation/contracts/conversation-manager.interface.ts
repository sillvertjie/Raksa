import { Conversation } from "../models/conversation.model";
import { ConversationMessage } from "../models/conversation-message.model";

export interface ConversationManager {
  create(): Promise<Conversation>;

  getById(id: string): Promise<Conversation | null>;

  addMessage(
    conversationId: string,
    message: ConversationMessage
  ): Promise<void>;
}