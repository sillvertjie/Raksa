import type { KnowledgeDocumentEntity } from "@/features/knowledge-base/entities/knowledge-document.entity";

export interface KnowledgeSearchReaderContract {
  getKnowledge(
    id: string,
  ): Promise<KnowledgeDocumentEntity | null>;
}