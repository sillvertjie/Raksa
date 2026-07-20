import type { FileRepository } from "@/features/files/contracts/file-repository.interface";
import type { WorkspaceFile } from "@/features/files/entities/workspace-file.entity";

export class FileSearchReader {
  constructor(
    private readonly repository: FileRepository,
  ) {}

  async getFile(
    id: string,
  ): Promise<WorkspaceFile | null> {
    return this.repository.findById(id);
  }
}