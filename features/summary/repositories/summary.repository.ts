import { prisma } from "@/lib/prisma";

export class SummaryRepository {
  async getSummary(userId: string) {
    const [
      totalNotes,
      totalCaptures,
      latestCapture,
    ] = await Promise.all([
      prisma.note.count({
        where: {
          userId,
        },
      }),

      prisma.capture.count({
        where: {
          userId,
        },
      }),

      prisma.capture.findFirst({
        where: {
          userId,
        },
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