import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

import type { KnowledgeDocumentRepository } from "../contracts/knowledge-document.repository.contract";

import type { CreateKnowledgeDocumentDto } from "../dto/create-knowledge-document.dto";
import type { CreateKnowledgeDocumentVersionDto } from "../dto/create-knowledge-document-version.dto";
import type { UpdateKnowledgeDocumentDto } from "../dto/update-knowledge-document.dto";


export class PrismaKnowledgeDocumentRepository
  implements KnowledgeDocumentRepository
{

  async create(data: CreateKnowledgeDocumentDto) {
    return prisma.knowledgeDocument.create({
      data: {
        workspaceId: data.workspaceId,
        title: data.title,
        slug: data.slug,
        parentId: data.parentId,
      },
    });
  }


  async update(
    id: string,
    data: UpdateKnowledgeDocumentDto,
  ) {
    return prisma.knowledgeDocument.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        slug: data.slug,
        parentId: data.parentId,
      },
    });
  }


  async findById(id: string) {
    return prisma.knowledgeDocument.findUnique({
      where: {
        id,
      },
      include: {
        versions: {
          orderBy: {
            versionNumber: "desc",
          },
        },
        children: true,
      },
    });
  }


  async findAll() {
    return prisma.knowledgeDocument.findMany({
      include: {
        children: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }


  async createVersion(
    data: CreateKnowledgeDocumentVersionDto,
  ) {

    const latestVersion =
      await prisma.knowledgeDocumentVersion.findFirst({
        where: {
          documentId: data.documentId,
        },
        orderBy: {
          versionNumber: "desc",
        },
      });


    return prisma.knowledgeDocumentVersion.create({
      data: {
        documentId: data.documentId,

        content:
          data.content as Prisma.InputJsonValue,

        versionNumber:
          (latestVersion?.versionNumber ?? 0) + 1,
      },
    });
  }


  async findHierarchy() {
    return prisma.knowledgeDocument.findMany({
      where: {
        parentId: null,
      },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

}