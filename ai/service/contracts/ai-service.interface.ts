import type { AIContext } from "@/ai/context/contracts/context-builder.interface";

export interface AIService {
  execute(
    request: AIRequest
  ): Promise<AIResponse>;
}

export interface AIRequest {
  message: string;

  conversationId?: string;

  context?: AIContext;

  options?: Record<string, unknown>;
}

export interface AIResponse {
  message: string;
}