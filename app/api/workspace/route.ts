import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import { AppError, ERROR_CODES } from "@/lib/errors";

import {
  getWorkspaceAggregationService,
} from "@/features/workspace/bootstrap/workspace.bootstrap";


export async function GET() {
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


    const workspaceService =
      getWorkspaceAggregationService();


    const result =
      await workspaceService.getWorkspace(
        session.user.id,
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