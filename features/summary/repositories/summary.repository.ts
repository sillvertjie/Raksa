import { prisma } from "@/lib/prisma";

export class SummaryRepository {
  async getSummary() {
    const [totalNotes, totalCaptures, latestCapture] =
      await Promise.all([
        prisma.note.count(),
        prisma.capture.count(),
        prisma.capture.findFirst({
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);

    return {
      totalNotes,
      totalCaptures,
      latestCapture:
        latestCapture?.content ?? null,
    };
  }
}