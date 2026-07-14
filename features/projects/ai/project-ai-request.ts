export type ProjectAIIntent =
  | "ASK_PROJECT"
  | "SUMMARIZE_PROJECT"
  | "GENERATE_PROJECT_DESCRIPTION";

interface BaseProjectAIRequest {
  intent: ProjectAIIntent;
}

export interface AskProjectRequest extends BaseProjectAIRequest {
  intent: "ASK_PROJECT";
  message: string;
}

export interface SummarizeProjectRequest extends BaseProjectAIRequest {
  intent: "SUMMARIZE_PROJECT";
}

export interface GenerateProjectDescriptionRequest
  extends BaseProjectAIRequest {
  intent: "GENERATE_PROJECT_DESCRIPTION";
  instruction: string;
}

export type ProjectAIRequest =
  | AskProjectRequest
  | SummarizeProjectRequest
  | GenerateProjectDescriptionRequest;