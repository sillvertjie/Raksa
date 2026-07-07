import { NoteRepository } from "../repositories/note.repository";
import { CreateNoteDTO } from "../dto/create-note.dto";
import { UpdateNoteDTO } from "../dto/update-note.dto";

export class NoteService {
  private readonly noteRepository: NoteRepository;

  constructor() {
    this.noteRepository = new NoteRepository();
  }

  async create(data: CreateNoteDTO) {
    return this.noteRepository.create(data);
  }

  async findAll() {
    return this.noteRepository.findAll();
  }

  async findById(id: string) {
    return this.noteRepository.findById(id);
  }

  async update(id: string, data: UpdateNoteDTO) {
    return this.noteRepository.update(id, data);
  }

  async delete(id: string) {
    return this.noteRepository.delete(id);
  }
}