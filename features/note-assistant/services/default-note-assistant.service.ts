import type { ContentGenerationService } from "@/features/content-generation/services/content-generation.service";

import type { NoteAssistantRequest } from "../contracts/note-assistant-request";
import type { NoteAssistantContext } from "../context/note-assistant-context.builder";
import type { NoteAssistantService } from "./note-assistant.service";

import { mapNoteAssistantToContentGenerationRequest } from "../mappers/note-assistant-ai.mapper";

export class DefaultNoteAssistantService
  implements NoteAssistantService
{
  constructor(
    private readonly contentGenerationService: ContentGenerationService,
  ) {}

  async assist(
    request: NoteAssistantRequest,
    context: NoteAssistantContext,
  ): Promise<string> {
    const generationRequest =
      mapNoteAssistantToContentGenerationRequest(
        request,
        context,
      );

    const response =
      await this.contentGenerationService.generate(
        generationRequest,
      );

    return response.content;
  }
}