import { auth } from "@/lib/auth";
import { AppError, ERROR_CODES } from "@/lib/errors";
import { handleApiError } from "@/lib/api/errors/handle-api-error";
import { handleApiSuccess } from "@/lib/api/errors/handle-api-success";

import { NoteService } from "@/features/notes/services/note.service";

const service = new NoteService();

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401
      );
    }

    const notes = await service.findAll(session.user.id);

    return handleApiSuccess(notes);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(
  request: Request
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401
      );
    }

    const body = await request.json();

    const note = await service.create(
      session.user.id,
      {
        title: body.title,
        content: body.content,
      }
    );

    return handleApiSuccess(note, 201);
  } catch (error) {
    return handleApiError(error);
  }
}