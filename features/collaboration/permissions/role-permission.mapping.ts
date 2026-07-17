import type { MembershipRole } from "../entities/workspace-membership.entity";
import type { Permission } from "./permission.entity";

export const RolePermissionMapping: Record<
  MembershipRole,
  Permission[]
> = {
  OWNER: [
    "workspace.read",
    "workspace.manage",
    "member.read",
    "member.invite",
    "member.remove",
    "project.read",
    "project.manage",
    "task.read",
    "task.manage",
    "knowledge.read",
    "knowledge.manage",
    "file.read",
    "file.manage",
  ],

  ADMIN: [
    "workspace.read",
    "workspace.manage",
    "member.read",
    "member.invite",
    "member.remove",
    "project.read",
    "project.manage",
    "task.read",
    "task.manage",
    "knowledge.read",
    "knowledge.manage",
    "file.read",
    "file.manage",
  ],

  MEMBER: [
    "workspace.read",
    "member.read",
    "project.read",
    "task.read",
    "task.manage",
    "knowledge.read",
    "knowledge.manage",
    "file.read",
    "file.manage",
  ],

  VIEWER: [
    "workspace.read",
    "member.read",
    "project.read",
    "task.read",
    "knowledge.read",
    "file.read",
  ],
};