import { handleApiError } from "@/lib/api/errors/handle-api-error";

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
    const { id } = await params;
    const body = await request.json();

    const capture = await service.update(
      id,
      {
        content: body.content,
      }
    );

    return Response.json(capture);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    await service.delete(id);

    return Response.json(
      {
        message: "Capture deleted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}