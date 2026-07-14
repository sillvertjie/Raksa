export interface KnowledgeDocumentEntity {
  id: string;

  workspaceId: string;

  title: string;

  slug: string;

  parentId?: string | null;

  createdAt: Date;

  updatedAt: Date;
}