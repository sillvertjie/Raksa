import type { UploadFileDto } from "../dto/upload-file.dto";

export class UploadFileValidator {
  static validate(dto: UploadFileDto): void {
    if (!dto.name.trim()) {
      throw new Error("File name is required.");
    }

    if (!dto.mimeType.trim()) {
      throw new Error("File mime type is required.");
    }

    if (dto.size <= 0) {
      throw new Error("File size must be greater than zero.");
    }

    if (!Buffer.isBuffer(dto.data)) {
      throw new Error("File data must be a Buffer.");
    }
  }
}