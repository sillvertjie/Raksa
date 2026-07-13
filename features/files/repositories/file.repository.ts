import type { FileRepository } from "../contracts/file-repository.interface";
import type { WorkspaceFile } from "../entities/workspace-file.entity";

export class InMemoryFileRepository implements FileRepository {
  private readonly files = new Map<string, WorkspaceFile>();

  async create(file: WorkspaceFile): Promise<WorkspaceFile> {
    this.files.set(file.id, file);

    return file;
  }

  async update(file: WorkspaceFile): Promise<WorkspaceFile> {
    this.files.set(file.id, file);

    return file;
  }

  async delete(id: string): Promise<void> {
    this.files.delete(id);
  }

  async findById(id: string): Promise<WorkspaceFile | null> {
    return this.files.get(id) ?? null;
  }

  async findAll(): Promise<WorkspaceFile[]> {
    return [...this.files.values()];
  }
}