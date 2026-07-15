export interface SearchAIBridge {
  ask(
    input: SearchAIBridgeInput,
  ): Promise<SearchAIBridgeResponse>;
}

export interface SearchAIBridgeInput {
  query: string;

  context: WorkspaceSearchContext[];
}

export interface WorkspaceSearchContext {
  id: string;

  type: string;

  title: string;

  description: string | null;

  status?: string;
}

export interface SearchAIBridgeResponse {
  message: string;
}