export interface ConversationOrchestrator {
  process(
    input: ConversationInput
  ): Promise<ConversationResult>;
}

export interface ConversationInput {
  conversationId?: string;
  message: string;
}

export interface ConversationResult {
  conversationId: string;
  message: string;
}