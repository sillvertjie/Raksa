import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import { AppError, ERROR_CODES } from "@/lib/errors";

import { getProjectApiRuntime } from "@/features/projects/bootstrap/project-api.bootstrap";

import { ListProjectsQuery } from "@/features/projects/queries/list-projects.query";
import { CreateProjectCommand } from "@/features/projects/commands/create-project.command";

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

    const { queryBus } = getProjectApiRuntime();

    const result = await queryBus.execute(
      new ListProjectsQuery(),
    );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401,
      );
    }

    const body = await request.json();

    const { commandBus } = getProjectApiRuntime();

    const result = await commandBus.execute(
      new CreateProjectCommand({
        name: body.name,
        description: body.description,
      }),
    );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}