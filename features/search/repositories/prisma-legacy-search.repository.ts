import { prisma } from "@/lib/prisma";
import type { SearchRepositoryInterface } from "../contracts/search-repository.interface";

export class PrismaLegacySearchRepository
  implements SearchRepositoryInterface
{
  async search(
    userId: string,
    query: string
  ) {
    const [notes, captures] = await Promise.all([
      prisma.note.findMany({
        where: {
          userId,
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
          userId,
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
     notes: notes.map((note) => ({
    id: note.id,
    title: note.title,
    content: note.content,
    createdAt: note.createdAt.toISOString(),
  })),

     captures: captures.map((capture) => ({
    id: capture.id,
    content: capture.content,
    createdAt: capture.createdAt.toISOString(),
      })),
    };
  }
}