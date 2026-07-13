import type { EventBus } from "@/features/shared/contracts/event-bus.interface";
import type { FileRepository } from "../contracts/file-repository.interface";
import type { StorageAdapter } from "../contracts/storage-adapter.interface";
import type { UploadFileDto } from "../dto/upload-file.dto";
import type { WorkspaceFile } from "../entities/workspace-file.entity";
import { FileUploadedEvent } from "../contracts/file-uploaded.event";
import { UploadFileValidator } from "../validators/upload-file.validator";
import type { FileUploadService } from "../contracts/file-upload.interface";

export class DefaultFileUploadService implements FileUploadService {
  constructor(
    private readonly repository: FileRepository,
    private readonly storage: StorageAdapter,
    private readonly eventBus: EventBus,
  ) {}

  async upload(
    dto: UploadFileDto,
  ): Promise<WorkspaceFile> {
    UploadFileValidator.validate(dto);

    const storageKey =
      `uploads/${crypto.randomUUID()}-${dto.name.trim()}`;

    await this.storage.upload(
      storageKey,
      dto.data,
    );

    const now = new Date();

    const file: WorkspaceFile = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      mimeType: dto.mimeType.trim(),
      size: dto.size,
      storageKey,
    };

    const created =
      await this.repository.create(file);

    this.eventBus.publish(
      new FileUploadedEvent({
        fileId: created.id,
        storageKey: created.storageKey,
        mimeType: created.mimeType,
        size: created.size,
      }),
    );

    return created;
  }
}