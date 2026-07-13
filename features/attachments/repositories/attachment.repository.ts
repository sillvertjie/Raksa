import type { AttachmentRepository } from "../contracts/attachment-repository.interface";
import type { Attachment } from "../entities/attachment.entity";

export class InMemoryAttachmentRepository
  implements AttachmentRepository {

  private readonly attachments =
    new Map<string, Attachment>();

  async create(
    attachment: Attachment,
  ): Promise<Attachment> {
    this.attachments.set(
      attachment.id,
      attachment,
    );

    return attachment;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.attachments.delete(id);
  }

  async findById(
    id: string,
  ): Promise<Attachment | null> {
    return this.attachments.get(id) ?? null;
  }

  async findAll(): Promise<Attachment[]> {
    return [
      ...this.attachments.values(),
    ];
  }

  async findByTarget(
    targetType: string,
    targetId: string,
  ): Promise<Attachment[]> {
    return [
      ...this.attachments.values(),
    ].filter(
      (attachment) =>
        attachment.targetType === targetType &&
        attachment.targetId === targetId,
    );
  }
}