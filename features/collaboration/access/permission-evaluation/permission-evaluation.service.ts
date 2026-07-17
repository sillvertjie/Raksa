import type { MembershipRepository } from "../../contracts/membership-repository.interface";
import type { PermissionEvaluationService } from "./contracts/permission-evaluation.contract";
import type { Permission } from "../../permissions/permission.entity";

import { RolePermissionMapping } from "../../permissions/role-permission.mapping";

export class DefaultPermissionEvaluationService
  implements PermissionEvaluationService
{
  constructor(
    private readonly repository: MembershipRepository,
  ) {}

  async can(
    workspaceId: string,
    userId: string,
    permission: Permission,
  ): Promise<boolean> {
    const members =
      await this.repository.findByWorkspace(
        workspaceId,
      );

    const membership = members.find(
      (member) =>
        member.userId === userId &&
        member.status === "ACTIVE",
    );

    if (!membership) {
      return false;
    }

    const permissions =
    RolePermissionMapping[membership.role];

    return permissions.includes(permission);
  }
}