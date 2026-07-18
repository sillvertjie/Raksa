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
  getActivityQueryRuntime,
} from "@/features/activity/bootstrap/activity-query.runtime";

import {
  ListActivityQuery,
} from "@/features/activity/queries/list-activity.query";


export async function GET() {
  try {
    const session =
      await auth();

    console.log("ACTIVITY USER ID:", session?.user?.id);

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
      queryBus,
    } = getActivityQueryRuntime();


    const result =
      await queryBus.execute(
        new ListActivityQuery(
          workspaceId,
          session.user.id,
        ),
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