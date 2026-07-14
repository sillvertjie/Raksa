import { prisma } from "@/lib/prisma";

import type { SearchIndexRepository } from "../contracts/search-index.repository.interface";
import type {
  SearchIndexDocument,
  SearchSource,
} from "../entities/search-index-document.entity";

export class PrismaSearchIndexRepository
  implements SearchIndexRepository
{
  async upsert(
    document: SearchIndexDocument,
  ): Promise<void> {
    await prisma.searchIndexDocument.upsert({
      where: {
        id: document.id,
      },
      update: {
        userId: document.userId,
        source: document.source,
        title: document.title,
        content: document.content,
      },
      create: {
        id: document.id,
        userId: document.userId,
        source: document.source,
        title: document.title,
        content: document.content,
      },
    });
  }

  async remove(
    id: string,
  ): Promise<void> {
    await prisma.searchIndexDocument.deleteMany({
      where: {
        id,
      },
    });
  }

  async search(
    userId: string,
    query: string,
  ): Promise<SearchIndexDocument[]> {
    const documents =
      await prisma.searchIndexDocument.findMany({
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
      });

    return documents.map((document) => ({
      ...document,
      source: document.source as SearchSource,
    }));
  }
}