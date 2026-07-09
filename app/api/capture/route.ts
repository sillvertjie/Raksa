import { handleApiError } from "@/lib/api/errors/handle-api-error";

import { CaptureService } from "@/features/capture/services/capture.service";

const service = new CaptureService();

export async function GET() {
  try {
    const captures = await service.findAll();

    return Response.json(captures);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const capture = await service.create({
      content: body.content,
    });

    return Response.json(capture, {
      status: 201,
    });
  } catch (error) {
    return handleApiError(error);
  }
}