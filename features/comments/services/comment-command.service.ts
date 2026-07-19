import type { EventBus } from "@/features/shared/contracts/event-bus.interface";
import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

import type { CommentRepository } from "../contracts/comment-repository.interface";
import type { Comment } from "../entities/comment.entity";

import { CommentCreatedEvent } from "../events/comment-created.event";
import { CommentDeletedEvent } from "../events/comment-deleted.event";
import { CommentUpdatedEvent } from "../events/comment-updated.event";
import { getCommentManagePermission } from "../utils/comment-permission.util";

    export class CommentCommandService {
        constructor(
        private readonly repository: CommentRepository,
        private readonly permissionService: PermissionEvaluationService,
        private readonly eventBus: EventBus,
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

    const created =
        await this.repository.create(comment);

    await this.eventBus.publish(
    new CommentCreatedEvent({
        commentId: created.id,
        workspaceId: created.workspaceId,
        targetType: created.targetType,
        targetId: created.targetId,
        authorId: created.authorId,
    }),
    );

    return created;
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

    const updated =
  await this.repository.update(comment);

await this.eventBus.publish(
  new CommentUpdatedEvent({
    commentId: updated.id,
    workspaceId: updated.workspaceId,
    targetType: updated.targetType,
    targetId: updated.targetId,
    authorId: updated.authorId,
  }),
);

return updated;
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
    await this.eventBus.publish(
  new CommentDeletedEvent({
    commentId: comment.id,
    workspaceId: comment.workspaceId,
    targetType: comment.targetType,
    targetId: comment.targetId,
    authorId: comment.authorId,
  }),
);
  }
}