import { ConversationMessage } from "./conversation-message.model";

export interface Conversation {
  id: string;
  messages?: ConversationMessage[];
}