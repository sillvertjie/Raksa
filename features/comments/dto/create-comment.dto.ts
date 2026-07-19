import type {
  CommentTargetType,
} from "../entities/comment.entity";


export interface CreateCommentDto {
  targetType: CommentTargetType;

  targetId: string;

  parentCommentId?: string | null;

  content: unknown;
}