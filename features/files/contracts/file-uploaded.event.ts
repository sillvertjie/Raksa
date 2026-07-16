import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface FileUploadedPayload {
  fileId: string;
  storageKey: string;
  mimeType: string;
  size: number;
}

export class FileUploadedEvent
  implements DomainEvent<FileUploadedPayload>
{
  readonly type = "file.uploaded";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: FileUploadedPayload,
  ) {}
}