import { prisma } from "@/lib/prisma";

import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";

export class CaptureRepository {
  async create(
    userId: string,
    data: CreateCaptureDTO
  ) {
    return prisma.capture.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return prisma.capture.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(
    id: string,
    userId: string,
    data: UpdateCaptureDTO
  ) {
    return prisma.capture.updateMany({
      where: {
        id,
        userId,
      },
      data,
    });
  }

  async delete(
    id: string,
    userId: string
  ) {
    return prisma.capture.deleteMany({
      where: {
        id,
        userId,
      },
    });
  }
}