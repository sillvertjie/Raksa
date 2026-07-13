import type { AttachmentTargetType } from "../contracts/attachment-target.type";

export interface Attachment {
  id: string;

  fileId: string;

  targetType: AttachmentTargetType;

  targetId: string;

  createdAt: Date;

  updatedAt: Date;
}