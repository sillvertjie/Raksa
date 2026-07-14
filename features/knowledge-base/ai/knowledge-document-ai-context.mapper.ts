import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

import type { KnowledgeDocumentAIContext } from "./knowledge-document-ai-context";


export function toKnowledgeDocumentAIContext(
  document: KnowledgeDocumentEntity,
  version: KnowledgeDocumentVersionEntity,
): KnowledgeDocumentAIContext {

  return {
    id: document.id,
    title: document.title,
    slug: document.slug,
    content: version.content,
    versionNumber: version.versionNumber,
  };

}