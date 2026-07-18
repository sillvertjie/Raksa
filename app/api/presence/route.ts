import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

import { workspaceContextResolver } from "@/features/collaboration/access/context/workspace-context.runtime";
import { getPresenceService } from "@/features/presence/runtime/presence.runtime";

export async function GET() {
  try {
    const session = await auth();

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

    const service =
      getPresenceService();

    const result =
      await service.getWorkspacePresence(
        workspaceId,
      );

    return handleApiSuccess(
      result.map((presence) => ({
        ...presence,
        lastSeenAt:
          presence.lastSeenAt.toISOString(),
      })),
    );
  } catch (error) {
    return handleApiError(error);
  }
}