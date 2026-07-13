import type { FileRepository } from "../contracts/file-repository.interface";
import type { FileService } from "../contracts/file-service.interface";
import type { CreateWorkspaceFileDto } from "../dto/create-workspace-file.dto";
import type { UpdateWorkspaceFileDto } from "../dto/update-workspace-file.dto";
import type { WorkspaceFile } from "../entities/workspace-file.entity";
import { WorkspaceFileValidator } from "../validators/workspace-file.validator";

export class DefaultFileService implements FileService {
  constructor(
    private readonly repository: FileRepository,
  ) {}

  async create(
    dto: CreateWorkspaceFileDto,
  ): Promise<WorkspaceFile> {
    WorkspaceFileValidator.validateCreate(dto);

    const now = new Date();

    const file: WorkspaceFile = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      mimeType: dto.mimeType.trim(),
      size: dto.size,
      storageKey: dto.storageKey.trim(),
    };

    return this.repository.create(file);
  }

  async update(
    id: string,
    dto: UpdateWorkspaceFileDto,
  ): Promise<WorkspaceFile> {
    WorkspaceFileValidator.validateUpdate(dto);

    const file = await this.repository.findById(id);

    if (!file) {
      throw new Error("File not found.");
    }

    const updated: WorkspaceFile = {
      ...file,
      ...dto,
      name:
        dto.name !== undefined
          ? dto.name.trim()
          : file.name,
      mimeType:
        dto.mimeType !== undefined
          ? dto.mimeType.trim()
          : file.mimeType,
      storageKey:
        dto.storageKey !== undefined
          ? dto.storageKey.trim()
          : file.storageKey,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(id: string): Promise<WorkspaceFile | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<WorkspaceFile[]> {
    return this.repository.findAll();
  }
}