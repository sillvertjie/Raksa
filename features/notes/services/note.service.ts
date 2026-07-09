import type { CreateNoteDTO } from "../dto/create-note.dto";
import type { UpdateNoteDTO } from "../dto/update-note.dto";

import { NoteRepository } from "../repositories/note.repository";

export class NoteService {
  constructor(
    private readonly repository = new NoteRepository()
  ) {}

  async create(
    userId: string,
    data: CreateNoteDTO
  ) {
    return this.repository.create(
      userId,
      data
    );
  }

  async findAll(
    userId: string
  ) {
    return this.repository.findAll(userId);
  }

  async findById(
    id: string,
    userId: string
  ) {
    return this.repository.findById(
      id,
      userId
    );
  }

  async update(
    id: string,
    userId: string,
    data: UpdateNoteDTO
  ) {
    return this.repository.update(
      id,
      userId,
      data
    );
  }

  async delete(
    id: string,
    userId: string
  ) {
    return this.repository.delete(
      id,
      userId
    );
  }
}