import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

import type { KnowledgeDocumentAIBridge } from "./knowledge-document-ai.bridge.interface";
import type { KnowledgeDocumentAIRequest } from "./knowledge-document-ai-request";
import type { KnowledgeDocumentAIResponse } from "./knowledge-document-ai-response";

import { toKnowledgeDocumentAIContext } from "./knowledge-document-ai-context.mapper";


export class DefaultKnowledgeDocumentAIBridge
  implements KnowledgeDocumentAIBridge {

  constructor(
    private readonly aiService: AIService,
  ) {}


  async handle(
    document: KnowledgeDocumentEntity,
    version: KnowledgeDocumentVersionEntity,
    request: KnowledgeDocumentAIRequest,
  ): Promise<KnowledgeDocumentAIResponse> {

    const context =
      toKnowledgeDocumentAIContext(
        document,
        version,
      );


    const aiResponse =
      await this.aiService.execute({
        message: this.createAIMessage(request),

        options: {
          knowledgeDocumentContext: context,

          intent: request.intent,
        },
      });


    return {
      content: aiResponse.message,
    };

  }


  private createAIMessage(
    request: KnowledgeDocumentAIRequest,
  ): string {

    switch (request.intent) {

      case "ASK_DOCUMENT":
        return request.message;


      case "SUMMARIZE_DOCUMENT":
        return "Summarize this knowledge document.";


      case "GENERATE_DOCUMENT_CONTENT":
        return request.instruction;

    }

  }

}