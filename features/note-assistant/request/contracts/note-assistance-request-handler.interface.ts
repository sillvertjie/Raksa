import type { NoteAssistantContext } from "../../context/note-assistant-context.builder";
import type { NoteAssistantRequest } from "../../contracts/note-assistant-request";

export interface NoteAssistanceRequestHandler {
  handle(
    request: NoteAssistantRequest,
    context: NoteAssistantContext,
  ): Promise<string>;
}