import { auth } from "@/lib/auth";
import { AppError, ERROR_CODES } from "@/lib/errors";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

import { NoteService } from "@/features/notes/services/note.service";

const service = new NoteService();

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext
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

    const { id } = await params;

    const note = await service.findById(
      id,
      session.user.id
    );

    return handleApiSuccess(note);

  } catch (error) {
    return handleApiError(error);
  }
}


export async function PATCH(
  request: Request,
  { params }: RouteContext
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

    const { id } = await params;

    const body = await request.json();

    const note = await service.update(
      id,
      session.user.id,
      {
        title: body.title,
        content: body.content,
      }
    );

    return handleApiSuccess(note);

  } catch (error) {
    return handleApiError(error);
  }
}


export async function DELETE(
  request: Request,
  { params }: RouteContext
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

    const { id } = await params;

    await service.delete(
      id,
      session.user.id
    );

    return handleApiSuccess({
      message: "Note deleted successfully.",
    });

  } catch (error) {
    return handleApiError(error);
  }
}