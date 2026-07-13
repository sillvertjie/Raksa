import type { CommandBus } from "../../shared/contracts/command-bus.interface";
import type { ProjectService } from "../contracts/project-service.interface";

import { CreateProjectCommandHandler } from "../handlers/create-project.command-handler";
import { UpdateProjectCommandHandler } from "../handlers/update-project.command-handler";
import { DeleteProjectCommandHandler } from "../handlers/delete-project.command-handler";

import type { QueryBus } from "../../shared/contracts/query-bus.interface";

import { GetProjectQueryHandler } from "../handlers/get-project.query-handler";
import { ListProjectsQueryHandler } from "../handlers/list-projects.query-handler";
import type { ProjectRepository } from "../contracts/project-repository.interface";

export function registerProjectCommands(
  commandBus: CommandBus,
  projectService: ProjectService,
): void {
  commandBus.register(
    "project.create",
    new CreateProjectCommandHandler(projectService),
  );

  commandBus.register(
    "project.update",
    new UpdateProjectCommandHandler(projectService),
  );

  commandBus.register(
    "project.delete",
    new DeleteProjectCommandHandler(projectService),
  );
}

export function registerProjectQueries(
  queryBus: QueryBus,
  repository: ProjectRepository,
): void {
  queryBus.register(
    "project.get",
    new GetProjectQueryHandler(repository),
  );

  queryBus.register(
    "project.list",
    new ListProjectsQueryHandler(repository),
  );
}