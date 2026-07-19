import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { CommentTargetType } from "../entities/comment.entity";

export interface CommentUpdatedPayload {
  commentId: string;

  workspaceId: string;

  targetType: CommentTargetType;

  targetId: string;

  authorId: string;
}

export class CommentUpdatedEvent
  implements DomainEvent<CommentUpdatedPayload>
{
  readonly type = "comment.updated";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: CommentUpdatedPayload,
  ) {}
}