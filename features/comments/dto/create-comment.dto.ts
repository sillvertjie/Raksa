import type { CommentTargetType } from "../entities/comment.entity";

export interface CreateCommentDto {
  workspaceId: string;

  authorId: string;

  targetType: CommentTargetType;

  targetId: string;

  parentCommentId?: string | null;

  content: unknown;
}