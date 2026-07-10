import { Conversation } from "@/ai/conversation/models/conversation.model";
import { ConversationStorage } from "@/ai/storage/contracts/conversation-storage.interface";

export class InMemoryConversationStorage
  implements ConversationStorage
{
  private readonly conversations = new Map<string, Conversation>();

  async save(conversation: Conversation): Promise<void> {
    this.conversations.set(conversation.id, conversation);
  }

  async findById(id: string): Promise<Conversation | null> {
    return this.conversations.get(id) ?? null;
  }

  async delete(id: string): Promise<void> {
    this.conversations.delete(id);
  }

  async exists(id: string): Promise<boolean> {
    return this.conversations.has(id);
  }
}