export interface ConversationManager {
  create(): Promise<Conversation>;

  addMessage(
    conversationId: string,
    message: ConversationMessage
  ): Promise<void>;
}

export interface Conversation {
  id: string;
}

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}