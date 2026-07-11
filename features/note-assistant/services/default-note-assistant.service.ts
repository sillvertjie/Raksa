import type { NoteAssistantRequest } from "../contracts/note-assistant-request";
import type { NoteAssistantContext } from "../context/note-assistant-context.builder";
import type { NoteAssistanceRequestHandler } from "../request/contracts/note-assistance-request-handler.interface";
import type { NoteAssistantService } from "./note-assistant.service";

export class DefaultNoteAssistantService
  implements NoteAssistantService
{
  constructor(
    private readonly requestHandler: NoteAssistanceRequestHandler,
  ) {}

  assist(
    request: NoteAssistantRequest,
    context: NoteAssistantContext,
  ): Promise<string> {
    return this.requestHandler.handle(
      request,
      context,
    );
  }
}