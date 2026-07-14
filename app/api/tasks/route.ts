import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import { AppError, ERROR_CODES } from "@/lib/errors";

import { getTaskApiRuntime } from "@/features/tasks/bootstrap/task-api.bootstrap";

import { ListTasksQuery } from "@/features/tasks/queries/list-tasks.query";
import { CreateTaskCommand } from "@/features/tasks/commands/create-task.command";


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

    const { queryBus } =
      getTaskApiRuntime();

    const result =
      await queryBus.execute(
        new ListTasksQuery(),
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

    const body =
      await request.json();

    const { commandBus } =
      getTaskApiRuntime();

    const result =
      await commandBus.execute(
        new CreateTaskCommand({
          title: body.title,
          description: body.description,
          priority: body.priority,
          projectId: body.projectId,
        }),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}