export interface SummarizeDto {
  content: string;
  maxLength?: number;
  style?: "short" | "medium" | "detailed";
  language?: string;
}