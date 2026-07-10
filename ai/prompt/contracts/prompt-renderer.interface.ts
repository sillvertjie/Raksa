export interface PromptRenderer {
  render(input: PromptRenderInput): string;
}

export interface PromptRenderInput {
  template: string;
  variables: Record<string, string>;
}