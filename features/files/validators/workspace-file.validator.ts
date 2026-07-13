import type { CreateWorkspaceFileDto } from "../dto/create-workspace-file.dto";
import type { UpdateWorkspaceFileDto } from "../dto/update-workspace-file.dto";

export class WorkspaceFileValidator {
  static validateCreate(dto: CreateWorkspaceFileDto): void {
    this.validateName(dto.name);
    this.validateMimeType(dto.mimeType);
    this.validateSize(dto.size);
    this.validateStorageKey(dto.storageKey);
  }

  static validateUpdate(dto: UpdateWorkspaceFileDto): void {
    if (dto.name !== undefined) {
      this.validateName(dto.name);
    }

    if (dto.mimeType !== undefined) {
      this.validateMimeType(dto.mimeType);
    }

    if (dto.size !== undefined) {
      this.validateSize(dto.size);
    }

    if (dto.storageKey !== undefined) {
      this.validateStorageKey(dto.storageKey);
    }
  }

  private static validateName(name: string): void {
    const value = name.trim();

    if (value.length === 0) {
      throw new Error("File name is required.");
    }

    if (value.length > 255) {
      throw new Error(
        "File name must not exceed 255 characters.",
      );
    }
  }

  private static validateMimeType(mimeType: string): void {
    const value = mimeType.trim();

    if (value.length === 0) {
      throw new Error("File mime type is required.");
    }
  }

  private static validateSize(size: number): void {
    if (size < 0) {
      throw new Error("File size cannot be negative.");
    }
  }

  private static validateStorageKey(storageKey: string): void {
    const value = storageKey.trim();

    if (value.length === 0) {
      throw new Error("File storage key is required.");
    }
  }
}