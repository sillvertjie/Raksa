export interface AIService {
  execute(request: AIRequest): Promise<AIResponse>;
}

export interface AIRequest {
  message: string;
  conversationId?: string;
  options?: Record<string, unknown>;
}

export interface AIResponse {
  message: string;
}