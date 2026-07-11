// request.options reserved for AI capabilities
// such as summarization, content generation,
// and semantic search.



import type { AIProvider } from "@/ai/provider/contracts/ai-provider.interface";
import type { ContextBuilder } from "@/ai/context/contracts/context-builder.interface";
import type { PromptRenderer } from "@/ai/prompt/contracts/prompt-renderer.interface";

import type {
  AIRequest,
  AIResponse,
  AIService,
} from "@/ai/service/contracts/ai-service.interface";

const DEFAULT_PROMPT_TEMPLATE =
  "You are Raksa AI assistant.\n\nUser message:\n{{message}}";

export class DefaultAIService implements AIService {
  constructor(
    private readonly provider: AIProvider,
    private readonly contextBuilder: ContextBuilder,
    private readonly promptRenderer: PromptRenderer,
  ) {}

  async execute(request: AIRequest): Promise<AIResponse> {
    const context = await this.contextBuilder.build({
      conversationId: request.conversationId,
    });

    const prompt = this.promptRenderer.render({
      template: DEFAULT_PROMPT_TEMPLATE,
      variables: {
        message: request.message,
      },
    });

    const response = await this.provider.generate({
      prompt,
      context: context.content,
    });

    return {
      message: response.content,
    };
  }
}