import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

export interface KnowledgeDocumentRepository {
  create(
    document: KnowledgeDocumentEntity,
  ): Promise<KnowledgeDocumentEntity>;

  findById(
    id: string,
  ): Promise<KnowledgeDocumentEntity | null>;

  findChildren(
    parentId: string,
  ): Promise<KnowledgeDocumentEntity[]>;

  createVersion(
    version: KnowledgeDocumentVersionEntity,
  ): Promise<KnowledgeDocumentVersionEntity>;

  findVersions(
    documentId: string,
  ): Promise<KnowledgeDocumentVersionEntity[]>;
}