export interface CreateKnowledgeDocumentDto {
  workspaceId: string;

  title: string;

  slug: string;

  parentId?: string | null;

  content: unknown;
}