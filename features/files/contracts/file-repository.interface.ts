import type { WorkspaceFile } from "../entities/workspace-file.entity";

export interface FileRepository {
  create(file: WorkspaceFile): Promise<WorkspaceFile>;

  update(file: WorkspaceFile): Promise<WorkspaceFile>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<WorkspaceFile | null>;

  findAll(): Promise<WorkspaceFile[]>;
}