export interface AIService {
  execute(request: AIRequest): Promise<AIResponse>;
}

export interface AIRequest {
  message: string;
  conversationId?: string;
}

export interface AIResponse {
  message: string;
}