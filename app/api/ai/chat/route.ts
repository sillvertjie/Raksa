import { auth } from "@/lib/auth";

import { aiRuntime } from "@/ai/bootstrap";

import type { SendAIChatDTO } from "@/features/ai-chat/dto/send-ai-chat.dto";
import { AIChatService } from "@/features/ai-chat/services/ai-chat.service";
import {
  validateAIChatMessage,
  validateConversationId,
} from "@/features/ai-chat/validators/ai-chat.validator";

import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

const service = new AIChatService(
  aiRuntime.conversationOrchestrator,
);

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401,
      );
    }

    const body = await request.json();

    let dto: SendAIChatDTO;

    try {
      dto = {
        conversationId: validateConversationId(
          body.conversationId,
        ),
        message: validateAIChatMessage(
          body.message,
        ),
      };
    } catch (error) {
      throw new AppError(
        ERROR_CODES.VALIDATION_ERROR,
        error instanceof Error
          ? error.message
          : "Invalid request.",
        400,
      );
    }

    const response = await service.sendMessage(dto);

    return handleApiSuccess(response);
  } catch (error) {
    return handleApiError(error);
  }
}