import { auth } from "@/lib/auth";

import { getProjectApiRuntime } 
from "@/features/projects/bootstrap/project-api.bootstrap";
import { CreateProjectCommand } from "@/features/projects/commands/create-project.command";
import { ListProjectsQuery } from "@/features/projects/queries/list-projects.query";

import { workspaceContextResolver } from "@/features/collaboration/access/context/workspace-context.runtime";

import { handleApiError } from "@/lib/api/errors/handle-api-error";
import { handleApiSuccess } from "@/lib/api/errors/handle-api-success";import { AppError } from "@/lib/errors/app-error";
import { ERROR_CODES } from "@/lib/errors/error-codes";

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

    const {
      queryBus,
    } = getProjectApiRuntime();

    const result =
      await queryBus.execute(
        new ListProjectsQuery(
          workspaceId,
        ),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(
  request: Request,
) {
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

    const body =
      await request.json();

    const {
      commandBus,
    } = getProjectApiRuntime();

    const result =
      await commandBus.execute(
        new CreateProjectCommand(
          workspaceId,
          {
            name: body.name,
            description: body.description,
          },
        ),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}