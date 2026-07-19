import { auth } from "@/lib/auth";

import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

import {
  workspaceContextResolver,
} from "@/features/collaboration/access/context/workspace-context.runtime";

import {
  getCommentApiRuntime,
} from "@/features/comments/bootstrap/comment-api.bootstrap";

import type {
  CommentTargetType,
} from "@/features/comments/entities/comment.entity";


export async function GET(
  request: Request,
) {
  try {
    const session =
      await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401,
      );
    }


    const workspaceId =
      await workspaceContextResolver.resolve(
        session.user.id,
      );


    const { searchParams } =
      new URL(request.url);


    const targetType =
      searchParams.get(
        "targetType",
      );

    const targetId =
      searchParams.get(
        "targetId",
      );


    if (
      !targetType ||
      !targetId
    ) {
      throw new AppError(
        ERROR_CODES.VALIDATION_ERROR,
        "Target information required.",
        400,
      );
    }


    const {
      queryService,
    } = getCommentApiRuntime();


    const result =
      await queryService.findByTarget(
        workspaceId,
        session.user.id,
        targetType as CommentTargetType,
        targetId,
      );


    return handleApiSuccess(
      result,
    );

  } catch (error) {
    return handleApiError(error);
  }
}


export async function POST(
  request: Request,
) {
  try {
    const session =
      await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401,
      );
    }


    const workspaceId =
      await workspaceContextResolver.resolve(
        session.user.id,
      );


    const body =
      await request.json();


    const {
      commandService,
    } = getCommentApiRuntime();


    const comment =
      await commandService.create(
        workspaceId,
        session.user.id,
        {
          id: crypto.randomUUID(),

          createdAt:
            new Date(),

          updatedAt:
            new Date(),

          workspaceId,

          authorId:
            session.user.id,

          targetType:
            body.targetType as CommentTargetType,

          targetId:
            body.targetId,

          parentCommentId:
            body.parentCommentId ?? null,

          content:
            body.content,

          normalizedText:
            "",

          resolvedAt:
            null,

          resolvedById:
            null,

          deletedAt:
            null,
        },
      );


    return handleApiSuccess(
      comment,
    );

  } catch (error) {
    return handleApiError(error);
  }
}