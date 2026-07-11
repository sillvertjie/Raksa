export interface ContentGenerationRequest {
  content: string;
  instruction: string;
  options?: ContentGenerationOptions;
}

export interface ContentGenerationOptions {
  mode?:
    | "generate"
    | "rewrite"
    | "expand"
    | "improve"
    | "continue"
    | "translate";
}