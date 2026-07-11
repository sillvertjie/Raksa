import type { NoteAssistantRequest } from "../contracts/note-assistant-request";

export function validateNoteAssistantRequest(
  request: NoteAssistantRequest,
): boolean {
  return Boolean(
    request.noteId &&
      request.action,
  );
}