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


export async function PATCH(
  request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  },
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


    const {
      id,
    } = await context.params;


    const body =
      await request.json();


    const {
      queryService,
      commandService,
    } = getCommentApiRuntime();


    const existing =
      await queryService.findById(
        workspaceId,
        session.user.id,
        id,
      );


    if (!existing) {
      throw new AppError(
        ERROR_CODES.NOT_FOUND,
        "Comment not found.",
        404,
      );
    }


    const updated =
      await commandService.update(
        workspaceId,
        session.user.id,
        {
          ...existing,

          content:
            body.content ?? existing.content,

          updatedAt:
            new Date(),
        },
      );


    return handleApiSuccess(
      updated,
    );

  } catch (error) {
    return handleApiError(error);
  }
}


export async function DELETE(
  _request: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  },
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


    const {
      id,
    } = await context.params;


    const {
      commandService,
    } = getCommentApiRuntime();


    await commandService.delete(
      workspaceId,
      session.user.id,
      id,
    );


    return handleApiSuccess(
      {
        deleted: true,
      },
    );

  } catch (error) {
    return handleApiError(error);
  }
}