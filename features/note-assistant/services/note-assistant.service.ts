import type { NoteAssistantRequest } from "../contracts/note-assistant-request";
import type { NoteAssistantContext } from "../context/note-assistant-context.builder";

export interface NoteAssistantService {
  assist(
    request: NoteAssistantRequest,
    context: NoteAssistantContext,
  ): Promise<string>;
}