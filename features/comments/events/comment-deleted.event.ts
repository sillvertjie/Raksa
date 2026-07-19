import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { CommentTargetType } from "../entities/comment.entity";

export interface CommentDeletedPayload {
  commentId: string;

  workspaceId: string;

  targetType: CommentTargetType;

  targetId: string;

  authorId: string;
}

export class CommentDeletedEvent
  implements DomainEvent<CommentDeletedPayload>
{
  readonly type = "comment.deleted";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: CommentDeletedPayload,
  ) {}
}