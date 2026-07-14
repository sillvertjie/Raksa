export type KnowledgeDocumentAIIntent =
  | "ASK_DOCUMENT"
  | "SUMMARIZE_DOCUMENT"
  | "GENERATE_DOCUMENT_CONTENT";


interface BaseKnowledgeDocumentAIRequest {
  intent: KnowledgeDocumentAIIntent;
}


export interface AskKnowledgeDocumentRequest
  extends BaseKnowledgeDocumentAIRequest {

  intent: "ASK_DOCUMENT";

  message: string;

}


export interface SummarizeKnowledgeDocumentRequest
  extends BaseKnowledgeDocumentAIRequest {

  intent: "SUMMARIZE_DOCUMENT";

}


export interface GenerateKnowledgeDocumentContentRequest
  extends BaseKnowledgeDocumentAIRequest {

  intent: "GENERATE_DOCUMENT_CONTENT";

  instruction: string;

}


export type KnowledgeDocumentAIRequest =
  | AskKnowledgeDocumentRequest
  | SummarizeKnowledgeDocumentRequest
  | GenerateKnowledgeDocumentContentRequest;