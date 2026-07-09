import { auth } from "@/lib/auth";
import { CaptureService } from "@/features/capture/services/capture.service";

const service = new CaptureService();

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
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

    const capture = await service.update(
      id,
      session.user.id,
      {
        content: body.content,
      }
    );

    return Response.json(capture);

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
        message: "Capture deleted successfully.",
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