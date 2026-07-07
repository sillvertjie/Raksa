import { NoteService } from "@/features/notes/services/note.service";

const service = new NoteService();

export async function GET() {
  try {
    const notes = await service.findAll();

    return Response.json(notes);
  } catch {
    return Response.json(
      { message: "Failed to load notes." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const note = await service.create({
      title: body.title,
      content: body.content,
    });

    return Response.json(note, { status: 201 });
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