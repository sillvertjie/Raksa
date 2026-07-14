import { InMemoryCommandBus } from "../../shared/command-bus/in-memory-command-bus";
import { InMemoryQueryBus } from "../../shared/query-bus/in-memory-query-bus";

import { InMemoryProjectRepository } from "../repositories/project.repository";
import { DefaultProjectService } from "../services/project.service";

import {
  registerProjectCommands,
  registerProjectQueries,
} from "./project-cqrs.bootstrap";


type ProjectApiRuntime = {
  commandBus: InMemoryCommandBus;
  queryBus: InMemoryQueryBus;
};


declare global {
  var projectApiRuntime:
    | ProjectApiRuntime
    | undefined;
}


function createProjectApiRuntime(): ProjectApiRuntime {
  const repository =
    new InMemoryProjectRepository();

  const service =
    new DefaultProjectService(repository);

  const commandBus =
    new InMemoryCommandBus();

  const queryBus =
    new InMemoryQueryBus();

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