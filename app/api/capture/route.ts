import { CaptureService } from "@/features/capture/services/capture.service";

const service = new CaptureService();

export async function GET() {
  try {
    const captures = await service.findAll();

    return Response.json(captures);
  } catch {
    return Response.json(
      { message: "Failed to load captures." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const capture = await service.create({
      content: body.content,
    });

    return Response.json(capture, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Internal Server Error";

    return Response.json(
      { message },
      { status: 400 }
    );
  }
}