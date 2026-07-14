export interface KnowledgeDocumentVersionEntity {
  id: string;

  documentId: string;

  content: unknown;

  versionNumber: number;

  createdAt: Date;
}