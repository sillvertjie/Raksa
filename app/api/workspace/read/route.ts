import { auth } from "@/lib/auth";

import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

import { getQueryBus } from "@/features/shared/query-bus/query-bus.runtime";

import { getWorkspaceQueryRuntime } from "@/features/workspace/bootstrap/workspace-query.runtime";

import {
  GetWorkspaceItemsQuery,
} from "@/features/workspace/queries/get-workspace-items.query";


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


    getWorkspaceQueryRuntime();


    const { searchParams } =
      new URL(request.url);


    const workspaceId =
      searchParams.get(
        "workspaceId",
      );


    if (!workspaceId) {
      throw new AppError(
        ERROR_CODES.VALIDATION_ERROR,
        "Workspace ID is required.",
        400,
      );
    }


    const query =
      new GetWorkspaceItemsQuery(
        workspaceId,
        session.user.id,
        {
          cursor:
            searchParams.get(
              "cursor",
            ) ?? undefined,

          limit:
            Number(
              searchParams.get(
                "limit",
              ) ?? 20,
            ),
        },
      );


    const result =
      await getQueryBus().execute(
        query,
      );


    return handleApiSuccess(
      result,
    );

  } catch (error) {
    return handleApiError(
      error,
    );
  }
}