import type {
  ContentGenerationOptions,
  ContentGenerationRequest,
} from "@/features/content-generation/contracts/content-generation-request";

import type { NoteAssistantRequest } from "../contracts/note-assistant-request";
import type { NoteAssistantContext } from "../context/note-assistant-context.builder";

export function mapNoteAssistantToContentGenerationRequest(
  request: NoteAssistantRequest,
  context: NoteAssistantContext,
): ContentGenerationRequest {
  return {
    content: context.content,
    instruction:
      request.instruction ??
      `Perform note assistant action: ${request.action}`,
    options: {
      mode: mapActionToGenerationMode(request.action),
    },
  };
}

function mapActionToGenerationMode(
  action: NoteAssistantRequest["action"],
): ContentGenerationOptions["mode"] {
  switch (action) {
    case "rewrite":
      return "rewrite";

    case "improve":
      return "improve";

    case "expand":
      return "expand";

    default:
      return "rewrite";
  }
}