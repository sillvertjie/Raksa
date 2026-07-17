import type { MembershipRole } from "../../entities/workspace-membership.entity";
import type { Permission } from "../permission.entity";

export interface PermissionContract {
  getPermissions(
    role: MembershipRole,
  ): Permission[];
}