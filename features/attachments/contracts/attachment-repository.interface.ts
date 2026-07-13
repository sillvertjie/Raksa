import type { Attachment } from "../entities/attachment.entity";

export interface AttachmentRepository {
  create(
    attachment: Attachment,
  ): Promise<Attachment>;

  delete(
    id: string,
  ): Promise<void>;

  findById(
    id: string,
  ): Promise<Attachment | null>;

  findAll(): Promise<Attachment[]>;

  findByTarget(
    targetType: string,
    targetId: string,
  ): Promise<Attachment[]>;
}