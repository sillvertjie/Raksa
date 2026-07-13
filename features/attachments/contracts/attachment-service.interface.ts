import type { CreateAttachmentDto } from "../dto/create-attachment.dto";
import type { Attachment } from "../entities/attachment.entity";

export interface AttachmentService {
  create(
    dto: CreateAttachmentDto,
  ): Promise<Attachment>;

  delete(
    id: string,
  ): Promise<void>;

  getById(
    id: string,
  ): Promise<Attachment | null>;

  getByTarget(
    targetType: string,
    targetId: string,
  ): Promise<Attachment[]>;
}