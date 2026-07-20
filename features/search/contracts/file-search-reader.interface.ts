import type { WorkspaceFile } from "@/features/files/entities/workspace-file.entity";

export interface FileSearchReaderContract {
  getFile(
    id: string,
  ): Promise<WorkspaceFile | null>;
}