import { SearchService } from "@/features/search/services/search.service";

const service = new SearchService();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await service.search({
      query: body.query,
    });

    return Response.json(result);
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