import { apiFetch } from "@/lib/api/client";

import type {
  CreateCommentDto,
} from "../dto/create-comment.dto";

import type {
  UpdateCommentDto,
} from "../dto/update-comment.dto";

import type {
  CommentTargetType,
} from "../entities/comment.entity";


export type CommentResponse = {
  id: string;

  workspaceId: string;

  authorId: string;

  targetType: CommentTargetType;

  targetId: string;

  parentCommentId: string | null;

  content: unknown;

  normalizedText: string;

  resolvedAt: string | null;

  resolvedById: string | null;

  deletedAt: string | null;

  createdAt: string;

  updatedAt: string;
};


export const commentsApi = {

  async getByTarget(
    targetType: CommentTargetType,
    targetId: string,
  ): Promise<CommentResponse[]> {
    return apiFetch<CommentResponse[]>(
      `/api/comments?targetType=${targetType}&targetId=${targetId}`,
      {
        method: "GET",
      },
    );
  },


  async create(
    dto: CreateCommentDto,
  ): Promise<CommentResponse> {
    return apiFetch<CommentResponse>(
      "/api/comments",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
    );
  },


  async update(
    id: string,
    dto: UpdateCommentDto,
  ): Promise<CommentResponse> {
    return apiFetch<CommentResponse>(
      `/api/comments/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(dto),
      },
    );
  },


  async delete(
    id: string,
  ): Promise<void> {
    await apiFetch<void>(
      `/api/comments/${id}`,
      {
        method: "DELETE",
      },
    );
  },

};