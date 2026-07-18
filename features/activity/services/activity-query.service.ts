import type { ActivityRepository } from "../contracts/activity-repository.interface";
import type { ActivityEntry } from "../entities/activity-entry.entity";

import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

/**
 * Activity Query Service
 *
 * Read-side service untuk Activity Timeline.
 *
 * Responsibilities:
 * - mengambil ActivityEntry dari Activity Repository
 * - melakukan authorization filtering melalui Permission Boundary
 * - menyediakan data timeline untuk Query Handler
 *
 * Service ini tidak membuat atau mengubah Activity Entry.
 * Activity Entry hanya dibuat oleh Activity Projection Service
 * melalui Domain Event.
 *
 * DEV-192:
 * Query layer foundation.
 *
 * Future:
 * Authorization rule dapat berkembang tanpa mengubah projection layer.
 */

export class DefaultActivityQueryService {
  constructor(
    private readonly repository: ActivityRepository,
    private readonly permissionService: PermissionEvaluationService,
  ) {}

  async list(
    workspaceId: string,
    userId: string,
  ): Promise<ActivityEntry[]> {

    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        "workspace.read",
      );

    if (!allowed) {
      return [];
    }

    return this.repository.findAll(
      workspaceId,
    );
  }
}