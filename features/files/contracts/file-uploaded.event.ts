import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

export interface FileUploadedPayload {
  fileId: string;
  storageKey: string;
  mimeType: string;
  size: number;
}

export class FileUploadedEvent implements DomainEvent {
  readonly type = "files.file-uploaded";
  readonly occurredAt = new Date();

  constructor(
    readonly payload: FileUploadedPayload,
  ) {}
}