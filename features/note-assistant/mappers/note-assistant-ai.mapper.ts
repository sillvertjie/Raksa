import type { AIRequest } from "@/ai/service/contracts/ai-service.interface";
import type { NoteAssistantRequest } from "../contracts/note-assistant-request";

export function mapNoteAssistantToAIRequest(
  request: NoteAssistantRequest,
): AIRequest {
  return {
    message: buildNoteAssistantMessage(request),
    options: {
      action: request.action,
      noteId: request.noteId,
      instruction: request.instruction,
    },
  };
}

function buildNoteAssistantMessage(
  request: NoteAssistantRequest,
): string {
  if (request.instruction) {
    return request.instruction;
  }

  return `Perform note assistant action: ${request.action}`;
}