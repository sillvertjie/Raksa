import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

import type {
  WorkspaceReadModelRepository,
  WorkspaceReadModelListOptions,
} from "../contracts/workspace-read-model.repository.interface";

import type {
  WorkspaceReadModelPage,
  WorkspaceReadModelEntity,
} from "../entities/workspace-read-model.entity";

import type { Permission } from "@/features/collaboration/permissions/permission.entity";

const WORKSPACE_READ_PERMISSION: Permission =
  "workspace.read";

export interface WorkspaceQueryContext {
  userId: string;
}

export class WorkspaceQueryService {
  constructor(
    private readonly repository: WorkspaceReadModelRepository,
    private readonly permissionService: PermissionEvaluationService,
  ) {}

  async list(
    options: WorkspaceReadModelListOptions,
    context: WorkspaceQueryContext,
  ): Promise<WorkspaceReadModelPage> {
    await this.ensureWorkspaceAccess(
      options.workspaceId,
      context.userId,
    );

    return this.repository.list(
      options,
    );
  }

  async findById(
    id: string,
    context: WorkspaceQueryContext,
  ): Promise<WorkspaceReadModelEntity | null> {
    const item =
      await this.repository.findById(
        id,
      );

    if (!item) {
      return null;
    }

    await this.ensureWorkspaceAccess(
      item.workspaceId,
      context.userId,
    );

    return item;
  }

  private async ensureWorkspaceAccess(
    workspaceId: string,
    userId: string,
  ): Promise<void> {
    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        WORKSPACE_READ_PERMISSION,
      );

    if (!allowed) {
      throw new Error(
        "Workspace access denied.",
      );
    }
  }
}