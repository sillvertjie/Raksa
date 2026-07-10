import {
  AIProvider,
  AIProviderRequest,
  AIProviderResponse,
} from "../contracts/ai-provider.interface";

export class MockAIProvider implements AIProvider {
  async generate(
    request: AIProviderRequest,
  ): Promise<AIProviderResponse> {
    return {
      content: `Mock response for: ${request.prompt}`,
    };
  }
}