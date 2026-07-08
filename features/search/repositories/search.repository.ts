import { prisma } from "@/lib/prisma";

export class SearchRepository {
  async search(query: string) {
    const [notes, captures] = await Promise.all([
      prisma.note.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              content: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.capture.findMany({
        where: {
          content: {
            contains: query,
            mode: "insensitive",
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    return {
      notes,
      captures,
    };
  }
}