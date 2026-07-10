import { Conversation } from "../models/conversation.model";
import { ConversationMessage } from "../models/conversation-message.model";

export interface ConversationManager {
  create(): Promise<Conversation>;

  addMessage(
    conversationId: string,
    message: ConversationMessage
  ): Promise<void>;
}