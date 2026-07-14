import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import { AppError, ERROR_CODES } from "@/lib/errors";

import { getTaskApiRuntime } from "@/features/tasks/bootstrap/task-api.bootstrap";

import { GetTaskQuery } from "@/features/tasks/queries/get-task.query";
import { UpdateTaskCommand } from "@/features/tasks/commands/update-task.command";
import { DeleteTaskCommand } from "@/features/tasks/commands/delete-task.command";


type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};


export async function GET(
  _request: Request,
  context: RouteContext,
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

    const { id } =
      await context.params;

    const { queryBus } =
      getTaskApiRuntime();

    const result =
      await queryBus.execute(
        new GetTaskQuery(id),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}


export async function PATCH(
  request: Request,
  context: RouteContext,
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

    const { id } =
      await context.params;

    const body =
      await request.json();

    const { commandBus } =
      getTaskApiRuntime();

    const result =
      await commandBus.execute(
        new UpdateTaskCommand(
          id,
          {
            title: body.title,
            description: body.description,
            status: body.status,
            priority: body.priority,
            projectId: body.projectId,
          },
        ),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}


export async function DELETE(
  _request: Request,
  context: RouteContext,
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

    const { id } =
      await context.params;

    const { commandBus } =
      getTaskApiRuntime();

    const result =
      await commandBus.execute(
        new DeleteTaskCommand({
          id,
        }),
      );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}