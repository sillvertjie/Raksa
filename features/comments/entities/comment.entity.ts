import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type CommentTargetType =
  | "PROJECT"
  | "TASK"
  | "KNOWLEDGE_DOCUMENT"
  | "NOTE";

export interface Comment extends BaseEntity {
  workspaceId: string;

  authorId: string;

  targetType: CommentTargetType;
  targetId: string;

  parentCommentId: string | null;

  /**
   * Structured editor document.
   *
   * Stored as JSON in persistence.
   * Concrete editor contract will be introduced
   * when the editor implementation is officially
   * introduced by the roadmap.
   */
  content: unknown;

  /**
   * Plain-text representation extracted from content.
   *
   * Used by:
   * - Search
   * - AI Context
   * - Timeline Preview
   * - Notifications
   * - Moderation
   */
  normalizedText: string;

  resolvedAt: Date | null;
  resolvedById: string | null;

  deletedAt: Date | null;
}