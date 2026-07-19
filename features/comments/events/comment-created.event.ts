import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { CommentTargetType } from "../entities/comment.entity";

export interface CommentCreatedPayload {
  commentId: string;

  workspaceId: string;

  targetType: CommentTargetType;

  targetId: string;

  authorId: string;
}

export class CommentCreatedEvent
  implements DomainEvent<CommentCreatedPayload>
{
  readonly type = "comment.created";

  readonly occurredAt = new Date();

  constructor(
    readonly payload: CommentCreatedPayload,
  ) {}
}