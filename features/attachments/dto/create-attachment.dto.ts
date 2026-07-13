import type { AttachmentTargetType } from "../contracts/attachment-target.type";

export interface CreateAttachmentDto {
  fileId: string;

  targetType: AttachmentTargetType;

  targetId: string;
}