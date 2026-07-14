import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

import type { KnowledgeDocumentAIRequest } from "./knowledge-document-ai-request";
import type { KnowledgeDocumentAIResponse } from "./knowledge-document-ai-response";


export interface KnowledgeDocumentAIBridge {

  handle(
    document: KnowledgeDocumentEntity,

    version: KnowledgeDocumentVersionEntity,

    request: KnowledgeDocumentAIRequest,

  ): Promise<KnowledgeDocumentAIResponse>;

}