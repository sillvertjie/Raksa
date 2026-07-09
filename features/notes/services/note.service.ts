import type { CreateNoteDTO } from "../dto/create-note.dto";
import type { UpdateNoteDTO } from "../dto/update-note.dto";

import { NoteRepository } from "../repositories/note.repository";

export class NoteService {
  constructor(
    private readonly repository = new NoteRepository()
  ) {}

  async create(data: CreateNoteDTO) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(
    id: string,
    data: UpdateNoteDTO
  ) {
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}