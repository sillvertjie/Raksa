import { ConversationMessage } from "./conversation-message.model";

export interface Conversation {
  id: string;

  workspaceId?: string;

  userId?: string;

  messages?: ConversationMessage[];
}