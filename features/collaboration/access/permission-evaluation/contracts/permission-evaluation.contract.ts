import type { Permission } from "@/features/collaboration/permissions/permission.entity";

export interface PermissionEvaluationService {
  can(
    workspaceId: string,
    userId: string,
    permission: Permission,
  ): Promise<boolean>;
}