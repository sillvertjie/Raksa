import type { AISearchRequest } from "../contracts/ai-search-request";

export class SearchContextBuilder {
  build(
    query: string,
    context: string,
  ): AISearchRequest {
    return {
      query,
      context,
    };
  }
}