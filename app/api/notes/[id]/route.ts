import { auth } from "@/lib/auth";
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
      return Response.json(
        {
          message: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const note = await service.findById(
      id,
      session.user.id
    );

    return Response.json(note);

  } catch (error) {

    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    return Response.json(
      {
        message,
      },
      {
        status: 400,
      }
    );
  }
}


export async function PATCH(
  request: Request,
  { params }: RouteContext
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json(
        {
          message: "Unauthorized.",
        },
        {
          status: 401,
        }
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

    return Response.json(note);

  } catch (error) {

    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    return Response.json(
      {
        message,
      },
      {
        status: 400,
      }
    );
  }
}


export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json(
        {
          message: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    await service.delete(
      id,
      session.user.id
    );

    return Response.json(
      {
        message: "Note deleted successfully.",
      }
    );

  } catch (error) {

    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    return Response.json(
      {
        message,
      },
      {
        status: 400,
      }
    );
  }
}