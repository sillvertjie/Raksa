export interface UpdateKnowledgeDocumentDto {
  title?: string;

  slug?: string;

  parentId?: string | null;

  content?: unknown;
}