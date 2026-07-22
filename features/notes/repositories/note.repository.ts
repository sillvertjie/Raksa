import { prisma } from "@/lib/prisma";

import type { CreateNoteDTO } from "../dto/create-note.dto";
import type { UpdateNoteDTO } from "../dto/update-note.dto";

export class NoteRepository {
  async create(
    userId: string,
    data: CreateNoteDTO
  ) {
    return prisma.note.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return prisma.note.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(
    id: string,
    userId: string
  ) {
    return prisma.note.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async update(
    id: string,
    userId: string,
    data: UpdateNoteDTO
  ) {
    const existing = await prisma.note.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existing) {
      throw new Error("Note not found.");
    }

    return prisma.note.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(
    id: string,
    userId: string
  ) {
    return prisma.note.deleteMany({
      where: {
        id,
        userId,
      },
    });
  }
}