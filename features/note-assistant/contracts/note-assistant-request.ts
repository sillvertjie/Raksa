export type NoteAssistantAction =
  | "summarize"
  | "rewrite"
  | "improve"
  | "expand"
  | "search-context";

export interface NoteAssistantRequest {
  noteId: string;
  action: NoteAssistantAction;
  instruction?: string;
}