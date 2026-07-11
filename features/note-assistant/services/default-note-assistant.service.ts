import type { ContentGenerationService } from "@/features/content-generation/services/content-generation.service";
import type { SummarizationService } from "@/features/summarization";

import type { NoteAssistantRequest } from "../contracts/note-assistant-request";
import type { NoteAssistantContext } from "../context/note-assistant-context.builder";
import type { NoteAssistantService } from "./note-assistant.service";

import { mapNoteAssistantToContentGenerationRequest } from "../mappers/note-assistant-ai.mapper";
import { mapNoteAssistantToSummarizationRequest } from "../mappers/note-assistant-summarization.mapper";

export class DefaultNoteAssistantService
  implements NoteAssistantService
{
  constructor(
    private readonly contentGenerationService: ContentGenerationService,
    private readonly summarizationService: SummarizationService,
  ) {}

  async assist(
    request: NoteAssistantRequest,
    context: NoteAssistantContext,
  ): Promise<string> {
    if (request.action === "summarize") {
      const summarizationRequest =
        mapNoteAssistantToSummarizationRequest(
          context,
        );

      const response =
        await this.summarizationService.summarize(
          summarizationRequest,
        );

      return response.summary;
    }

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