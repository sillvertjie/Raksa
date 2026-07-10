export interface ConversationStorage {
  save(conversation: StoredConversation): Promise<void>;

  findById(
    id: string
  ): Promise<StoredConversation | null>;
}

export interface StoredConversation {
  id: string;
}