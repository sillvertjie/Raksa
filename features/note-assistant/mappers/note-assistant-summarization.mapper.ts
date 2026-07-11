import type { SummarizationRequest } from "@/features/summarization";

import type { NoteAssistantContext } from "../context/note-assistant-context.builder";

export function mapNoteAssistantToSummarizationRequest(
  context: NoteAssistantContext,
): SummarizationRequest {
  return {
    content: context.content,
  };
}