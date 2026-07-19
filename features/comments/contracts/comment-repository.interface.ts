import type { Comment } from "../entities/comment.entity";

export interface CommentRepository {
  create(comment: Comment): Promise<Comment>;

  update(comment: Comment): Promise<Comment>;

  delete(id: string): Promise<void>;

  findById(
    workspaceId: string,
    id: string,
  ): Promise<Comment | null>;

  findByTarget(
    workspaceId: string,
    targetType: Comment["targetType"],
    targetId: string,
  ): Promise<Comment[]>;

  findReplies(
    workspaceId: string,
    parentCommentId: string,
  ): Promise<Comment[]>;
}