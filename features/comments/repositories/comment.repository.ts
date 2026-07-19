import type { CommentRepository } from "../contracts/comment-repository.interface";
import type { Comment } from "../entities/comment.entity";

export class InMemoryCommentRepository
  implements CommentRepository
{
  private readonly comments = new Map<string, Comment>();

  async create(
    comment: Comment,
  ): Promise<Comment> {
    this.comments.set(
      comment.id,
      comment,
    );

    return comment;
  }

  async update(
    comment: Comment,
  ): Promise<Comment> {
    this.comments.set(
      comment.id,
      comment,
    );

    return comment;
  }

  async delete(
    id: string,
  ): Promise<void> {
    this.comments.delete(id);
  }

  async findById(
    workspaceId: string,
    id: string,
  ): Promise<Comment | null> {
    const comment =
      this.comments.get(id);

    if (
      !comment ||
      comment.workspaceId !== workspaceId
    ) {
      return null;
    }

    return comment;
  }

  async findByTarget(
    workspaceId: string,
    targetType: Comment["targetType"],
    targetId: string,
  ): Promise<Comment[]> {
    return [
      ...this.comments.values(),
    ].filter(
      (comment) =>
        comment.workspaceId === workspaceId &&
        comment.targetType === targetType &&
        comment.targetId === targetId,
    );
  }

  async findReplies(
    workspaceId: string,
    parentCommentId: string,
  ): Promise<Comment[]> {
    return [
      ...this.comments.values(),
    ].filter(
      (comment) =>
        comment.workspaceId === workspaceId &&
        comment.parentCommentId ===
          parentCommentId,
    );
  }
}