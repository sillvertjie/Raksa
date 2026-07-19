import type { Permission } from "@/features/collaboration/permissions/permission.entity";

import type { CommentTargetType } from "../entities/comment.entity";

export function getCommentReadPermission(
  targetType: CommentTargetType,
): Permission {
  switch (targetType) {
    case "PROJECT":
      return "project.read";

    case "TASK":
      return "task.read";

    case "KNOWLEDGE_DOCUMENT":
      return "knowledge.read";

    case "NOTE":
      throw new Error(
        "Comment permission mapping for NOTE is not implemented.",
      );

    default: {
      const exhaustiveCheck: never = targetType;

      throw new Error(
        `Unsupported comment target: ${exhaustiveCheck}`,
      );
    }
  }
}

export function getCommentManagePermission(
  targetType: CommentTargetType,
): Permission {
  switch (targetType) {
    case "PROJECT":
      return "project.manage";

    case "TASK":
      return "task.manage";

    case "KNOWLEDGE_DOCUMENT":
      return "knowledge.manage";

    case "NOTE":
      throw new Error(
        "Comment permission mapping for NOTE is not implemented.",
      );

    default: {
      const exhaustiveCheck: never = targetType;

      throw new Error(
        `Unsupported comment target: ${exhaustiveCheck}`,
      );
    }
  }
}