import type { CreateAttachmentDto } from "../dto/create-attachment.dto";
import { AttachmentTargetType } from "../contracts/attachment-target.type";

export class AttachmentValidator {
  static validateCreate(
    dto: CreateAttachmentDto,
  ): void {
    if (!dto.fileId.trim()) {
      throw new Error("File id is required.");
    }

    if (!dto.targetId.trim()) {
      throw new Error("Target id is required.");
    }

    if (
      !Object.values(
        AttachmentTargetType,
      ).includes(dto.targetType)
    ) {
      throw new Error("Invalid attachment target type.");
    }
  }
}