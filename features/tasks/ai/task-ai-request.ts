export type TaskAIIntent =
  | "ASK_TASK"
  | "SUMMARIZE_TASK"
  | "GENERATE_TASK_DESCRIPTION";

interface BaseTaskAIRequest {
  intent: TaskAIIntent;
}

export interface AskTaskRequest
  extends BaseTaskAIRequest {
  intent: "ASK_TASK";
  message: string;
}

export interface SummarizeTaskRequest
  extends BaseTaskAIRequest {
  intent: "SUMMARIZE_TASK";
}

export interface GenerateTaskDescriptionRequest
  extends BaseTaskAIRequest {
  intent: "GENERATE_TASK_DESCRIPTION";
  instruction: string;
}

export type TaskAIRequest =
  | AskTaskRequest
  | SummarizeTaskRequest
  | GenerateTaskDescriptionRequest;