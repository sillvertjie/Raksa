import { Conversation } from "@/ai/conversation/models/conversation.model";

export interface ConversationStorage {
  save(conversation: Conversation): Promise<void>;

  findById(id: string): Promise<Conversation | null>;

  delete(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;

}