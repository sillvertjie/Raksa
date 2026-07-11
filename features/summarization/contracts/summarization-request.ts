import { SummarizationOptions } from "./summarization-options";

export interface SummarizationRequest {
  content: string;
  options?: SummarizationOptions;
}