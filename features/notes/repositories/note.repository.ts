import { prisma } from "@/lib/prisma";
import { CreateNoteDTO } from "../dto/create-note.dto";
import { UpdateNoteDTO } from "../dto/update-note.dto";

export class NoteRepository {
  async create(data: CreateNoteDTO) {
    return prisma.note.create({
      data,
    });
  }

  async findAll() {
    return prisma.note.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.note.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateNoteDTO) {
    return prisma.note.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.note.delete({
      where: {
        id,
      },
    });
  }
}