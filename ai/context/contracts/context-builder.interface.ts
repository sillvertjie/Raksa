import type { AIContextPayload } from "./ai-context.contract";

export interface ContextBuilder {
  build(input: ContextBuildInput): Promise<AIContext>;
}

export interface ContextBuildInput {
  conversationId?: string;

  additionalContext?: AIContextPayload;
}

export interface AIContext {
  content: string;
}