import { InMemoryCommandBus } from "../../shared/command-bus/in-memory-command-bus";
import { getQueryBus } from "../../shared/query-bus/query-bus.runtime";

import { getProjectRepository } from "../repositories/project.repository.runtime";
import { DefaultProjectService } from "../services/project.service";

import {
  registerProjectCommands,
  registerProjectQueries,
} from "./project-cqrs.bootstrap";


type ProjectApiRuntime = {
  commandBus: InMemoryCommandBus;
  queryBus: ReturnType<typeof getQueryBus>;
};


declare global {
  var projectApiRuntime:
    | ProjectApiRuntime
    | undefined;
}


function createProjectApiRuntime(): ProjectApiRuntime {
  const repository =
    getProjectRepository();

  const service =
    new DefaultProjectService(repository);

  const commandBus =
    new InMemoryCommandBus();

  const queryBus =
    getQueryBus();

  registerProjectCommands(
    commandBus,
    service,
  );

  registerProjectQueries(
    queryBus,
    repository,
  );

  return {
    commandBus,
    queryBus,
  };
}


export function getProjectApiRuntime() {
  if (!global.projectApiRuntime) {
    global.projectApiRuntime =
      createProjectApiRuntime();
  }

  return global.projectApiRuntime;
}