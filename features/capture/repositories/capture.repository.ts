import { prisma } from "@/lib/prisma";

export class CaptureRepository {
  async create(content: string) {
    return prisma.capture.create({
      data: {
        content,
      },
    });
  }

  async findAll() {
    return prisma.capture.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(id: string, content: string) {
    return prisma.capture.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
  }

  async delete(id: string) {
    return prisma.capture.delete({
      where: {
        id,
      },
    });
  }
}