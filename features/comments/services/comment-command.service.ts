import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

import type { CommentRepository } from "../contracts/comment-repository.interface";
import type { Comment } from "../entities/comment.entity";

import { getCommentManagePermission } from "../utils/comment-permission.util";

export class CommentCommandService {
  constructor(
    private readonly repository: CommentRepository,
    private readonly permissionService: PermissionEvaluationService,
  ) {}

  async create(
    workspaceId: string,
    userId: string,
    comment: Comment,
  ): Promise<Comment> {
    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentManagePermission(
          comment.targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    return this.repository.create(comment);
  }

  async update(
    workspaceId: string,
    userId: string,
    comment: Comment,
  ): Promise<Comment> {
    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentManagePermission(
          comment.targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    return this.repository.update(comment);
  }

  async delete(
    workspaceId: string,
    userId: string,
    commentId: string,
  ): Promise<void> {
    const comment =
      await this.repository.findById(
        workspaceId,
        commentId,
      );

    if (!comment) {
      throw new Error("Comment not found.");
    }

    const allowed =
      await this.permissionService.can(
        workspaceId,
        userId,
        getCommentManagePermission(
          comment.targetType,
        ),
      );

    if (!allowed) {
      throw new Error("Permission denied.");
    }

    await this.repository.delete(commentId);
  }
}