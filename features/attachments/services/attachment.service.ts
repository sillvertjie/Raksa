import type { AttachmentService } from "../contracts/attachment-service.interface";
import type { AttachmentRepository } from "../contracts/attachment-repository.interface";
import type { CreateAttachmentDto } from "../dto/create-attachment.dto";
import type { Attachment } from "../entities/attachment.entity";

import { AttachmentValidator } from "../validators/attachment.validator";

export class DefaultAttachmentService
  implements AttachmentService {
  constructor(
    private readonly repository: AttachmentRepository,
  ) {}

  async create(
    dto: CreateAttachmentDto,
  ): Promise<Attachment> {
    AttachmentValidator.validateCreate(dto);

    const fileId = dto.fileId.trim();
    const targetId = dto.targetId.trim();

    const existing =
      await this.repository.findByTarget(
        dto.targetType,
        targetId,
      );

    const duplicate =
      existing.find(
        (attachment) =>
          attachment.fileId === fileId,
      );

    if (duplicate) {
      throw new Error(
        "File is already attached to target.",
      );
    }

    const now = new Date();

    const attachment: Attachment = {
      id: crypto.randomUUID(),
      fileId,
      targetType: dto.targetType,
      targetId,
      createdAt: now,
      updatedAt: now,
    };

    return this.repository.create(
      attachment,
    );
  }

  async delete(
    id: string,
  ): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(
    id: string,
  ): Promise<Attachment | null> {
    return this.repository.findById(id);
  }

  async getByTarget(
    targetType: string,
    targetId: string,
  ): Promise<Attachment[]> {
    return this.repository.findByTarget(
      targetType,
      targetId,
    );
  }
}