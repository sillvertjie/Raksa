import type { KnowledgeDocumentRepository } from "@/features/knowledge-base/contracts/knowledge-document.repository.contract";
import type { KnowledgeDocumentEntity } from "@/features/knowledge-base/entities/knowledge-document.entity";

export class KnowledgeSearchReader {
  constructor(
    private readonly repository: KnowledgeDocumentRepository,
  ) {}

  async getKnowledge(
    id: string,
  ): Promise<KnowledgeDocumentEntity | null> {
    return this.repository.findById(id);
  }
}