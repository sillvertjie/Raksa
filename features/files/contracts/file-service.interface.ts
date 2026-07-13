import type { CreateWorkspaceFileDto } from "../dto/create-workspace-file.dto";
import type { UpdateWorkspaceFileDto } from "../dto/update-workspace-file.dto";
import type { WorkspaceFile } from "../entities/workspace-file.entity";

export interface FileService {
  create(dto: CreateWorkspaceFileDto): Promise<WorkspaceFile>;

  update(
    id: string,
    dto: UpdateWorkspaceFileDto,
  ): Promise<WorkspaceFile>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<WorkspaceFile | null>;

  getAll(): Promise<WorkspaceFile[]>;
}