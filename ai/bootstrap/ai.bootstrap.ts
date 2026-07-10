import type { PromptRenderer } from "@/ai/prompt/contracts/prompt-renderer.interface";

import { DefaultContextBuilder } from "@/ai/context/implementations/default-context.builder";
import { DefaultConversationManager } from "@/ai/conversation/implementations/default-conversation.manager";
import { DefaultConversationOrchestrator } from "@/ai/orchestration/implementations/default-conversation.orchestrator";
import { MockAIProvider } from "@/ai/provider/implementations/mock-ai.provider";
import { DefaultAIService } from "@/ai/service/implementations/default-ai.service";
import { InMemoryConversationStorage } from "@/ai/storage/implementations/in-memory-conversation.storage";

interface AIBootstrapDependencies {
  promptRenderer: PromptRenderer;
}

export function createAIBootstrap(
  dependencies: AIBootstrapDependencies,
) {
  const storage =
    new InMemoryConversationStorage();

  const conversationManager =
    new DefaultConversationManager(storage);

  const contextBuilder =
    new DefaultContextBuilder(conversationManager);

  const provider =
    new MockAIProvider();

  const aiService =
    new DefaultAIService(
      provider,
      contextBuilder,
      dependencies.promptRenderer,
    );

  const conversationOrchestrator =
    new DefaultConversationOrchestrator(
      conversationManager,
      contextBuilder,
      aiService,
    );

  return {
    conversationManager,
    contextBuilder,
    aiService,
    conversationOrchestrator,
  };
}