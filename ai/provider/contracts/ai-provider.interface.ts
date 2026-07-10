export interface AIProvider {
  generate(request: AIProviderRequest): Promise<AIProviderResponse>;
}

export interface AIProviderRequest {
  prompt: string;
  context?: string;
}

export interface AIProviderResponse {
  content: string;
}