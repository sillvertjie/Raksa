export interface ContextBuilder {
  build(input: ContextBuildInput): Promise<AIContext>;
}

export interface ContextBuildInput {
  conversationId?: string;
}

export interface AIContext {
  content: string;
}