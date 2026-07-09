import { prisma } from "@/lib/prisma";

import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";

export class CaptureRepository {
  async create(data: CreateCaptureDTO) {
    return prisma.capture.create({
      data,
    });
  }

  async findAll() {
    return prisma.capture.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(
    id: string,
    data: UpdateCaptureDTO
  ) {
    return prisma.capture.update({
      where: {
        id,
      },
      data,
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