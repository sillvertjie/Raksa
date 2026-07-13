import type { UploadFileDto } from "../dto/upload-file.dto";
import type { WorkspaceFile } from "../entities/workspace-file.entity";

export interface FileUploadService {
  upload(
    dto: UploadFileDto,
  ): Promise<WorkspaceFile>;
}