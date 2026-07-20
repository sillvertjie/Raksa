import type { Permission } from "@/features/collaboration/permissions/permission.entity";

export const AI_CONTEXT_PERMISSIONS: Permission[] = [
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
];