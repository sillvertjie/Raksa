import { auth } from "@/lib/auth";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";
import { AppError, ERROR_CODES } from "@/lib/errors";

import { getProjectApiRuntime } from "@/features/projects/bootstrap/project-api.bootstrap";

import { GetProjectQuery } from "@/features/projects/queries/get-project.query";
import { UpdateProjectCommand } from "@/features/projects/commands/update-project.command";
import { DeleteProjectCommand } from "@/features/projects/commands/delete-project.command";

import { workspaceContextResolver } from "@/features/collaboration/access/context/workspace-context.runtime";


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


    const workspaceId =
      await workspaceContextResolver.resolve(
        session.user.id,
      );


    const { id } =
      await context.params;


    const {
      queryBus,
    } = getProjectApiRuntime();


    const result =
      await queryBus.execute(
        new GetProjectQuery(
          workspaceId,
          id,
        ),
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


    const workspaceId =
      await workspaceContextResolver.resolve(
        session.user.id,
      );


    const { id } =
      await context.params;


    const body =
      await request.json();


    const {
      commandBus,
    } = getProjectApiRuntime();


    const result =
      await commandBus.execute(
        new UpdateProjectCommand(
          workspaceId,
          id,
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


    const workspaceId =
      await workspaceContextResolver.resolve(
        session.user.id,
      );


    const { id } =
      await context.params;


    const {
      commandBus,
    } = getProjectApiRuntime();



    const result =
      await commandBus.execute(
        new DeleteProjectCommand(
          workspaceId,
          {
            id,
          },
        ),
      );


    return handleApiSuccess(result);


  } catch (error) {
    return handleApiError(error);
  }

}