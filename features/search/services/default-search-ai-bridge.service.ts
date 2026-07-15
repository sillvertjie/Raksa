import type { AIService } from "@/ai/service/contracts/ai-service.interface";

import type {
  SearchAIBridge,
  SearchAIBridgeInput,
  SearchAIBridgeResponse,
} from "../contracts/search-ai-bridge.interface";


export class DefaultSearchAIBridge
  implements SearchAIBridge
{
  constructor(
    private readonly aiService: AIService,
  ) {}

  async ask(
    input: SearchAIBridgeInput,
  ): Promise<SearchAIBridgeResponse> {
    const context =
      input.context
        .map(
          (item) =>
            [
              `Type: ${item.type}`,
              `Title: ${item.title}`,
              `Description: ${item.description ?? "-"}`,
              `Status: ${item.status ?? "-"}`,
            ].join("\n"),
        )
        .join("\n\n");


    const response =
      await this.aiService.execute({
        message:
          [
            "Answer the user question using the workspace context below.",
            "",
            `Question: ${input.query}`,
            "",
            "Workspace Context:",
            context,
          ].join("\n"),
      });


    return {
      message: response.message,
    };
  }
}