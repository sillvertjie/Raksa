import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

import type { CommentRepository } from "../contracts/comment-repository.interface";
import type { Comment } from "../entities/comment.entity";

import { getCommentReadPermission } from "../utils/comment-permission.util";

export class CommentQueryService {
  constructor(
    private readonly repository: CommentRepository,
    private readonly permissionService: PermissionEvaluationService,
  ) {}

  async findById(
    workspaceId: string,
    userId: string,
    commentId: string,
  ): Promise<Comment | null> {
    const comment =
      await this.repository.findById(
        workspaceId,
        commentId,
      );

    if (!comment) {
      return null;
    }

    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentReadPermission(
          comment.targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    return comment;
  }

  async findByTarget(
    workspaceId: string,
    userId: string,
    targetType: Comment["targetType"],
    targetId: string,
  ): Promise<Comment[]> {
    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentReadPermission(
          targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    return this.repository.findByTarget(
      workspaceId,
      targetType,
      targetId,
    );
  }

  async findReplies(
    workspaceId: string,
    userId: string,
    parentCommentId: string,
  ): Promise<Comment[]> {
    const parent =
      await this.repository.findById(
        workspaceId,
        parentCommentId,
      );

    if (!parent) {
      return [];
    }

    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentReadPermission(
          parent.targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    return this.repository.findReplies(
      workspaceId,
      parentCommentId,
    );
  }
}