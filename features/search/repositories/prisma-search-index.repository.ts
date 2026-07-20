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
      scopeId: document.scopeId,
      source: document.source,
      title: document.title,
      content: document.content,
    },
    create: {
      id: document.id,
      scopeId: document.scopeId,
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
    scopeId: string,
    query: string,
  ): Promise<SearchIndexDocument[]> {
    const documents =
      await prisma.$queryRaw<
        Array<{
          id: string;
          scopeId: string;
          source: string;
          title: string;
          content: string;
          createdAt: Date;
          updatedAt: Date;
        }>
      >`
        SELECT
          "id",
          "scopeId",
          "source",
          "title",
          "content",
          "createdAt",
          "updatedAt"
        FROM "SearchIndexDocument"
        WHERE "scopeId" = ${scopeId}
        AND "search_vector" @@ plainto_tsquery(
          'simple',
          ${query}
        )
        ORDER BY "createdAt" DESC
      `;

    return documents.map((document) => ({
      ...document,
      source: document.source as SearchSource,
    }));
  }
}