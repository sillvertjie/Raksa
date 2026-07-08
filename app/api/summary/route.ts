import { SummaryService } from "@/features/summary/services/summary.service";

const service = new SummaryService();

export async function GET() {
  try {
    const summary = await service.getSummary();

    return Response.json(summary);
  } catch {
    return Response.json(
      {
        message: "Failed to load summary.",
      },
      {
        status: 500,
      }
    );
  }
}