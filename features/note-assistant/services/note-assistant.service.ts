import type { NoteAssistantRequest } from "../contracts/note-assistant-request";

export interface NoteAssistantService {
  assist(request: NoteAssistantRequest): Promise<string>;
}