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

  metadata?: AIContextPayload;

  conversation?: {
    id: string;

    workspaceId?: string;

    userId?: string;
  };
}