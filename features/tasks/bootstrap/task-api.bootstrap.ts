import "@/features/search/bootstrap/search.bootstrap";

import { InMemoryCommandBus } from "../../shared/command-bus/in-memory-command-bus";
import { getQueryBus } from "../../shared/query-bus/query-bus.runtime";
import { getEventBus } from "../../shared/event-bus/event-bus.runtime";

import { getTaskRepository } from "../repositories/task.repository.runtime";
import { DefaultTaskService } from "../services/task.service";

import {
  registerTaskCommands,
  registerTaskQueries,
} from "./task-cqrs.bootstrap";

import {
  registerTaskEventListeners,
} from "../listeners/task-event.listener";


type TaskApiRuntime = {
  commandBus: InMemoryCommandBus;
  queryBus: ReturnType<typeof getQueryBus>;
};


declare global {
  var taskApiRuntime:
    | TaskApiRuntime
    | undefined;
}


function createTaskApiRuntime(): TaskApiRuntime {
  const repository =
    getTaskRepository();

  const eventBus =
    getEventBus();

  const service =
    new DefaultTaskService(
      repository,
      eventBus,
    );

  const commandBus =
    new InMemoryCommandBus();

  const queryBus =
    getQueryBus();

  registerTaskCommands(
    commandBus,
    service,
  );

  registerTaskQueries(
    queryBus,
    repository,
  );

  registerTaskEventListeners(
    eventBus,
  );

  return {
    commandBus,
    queryBus,
  };
}


export function getTaskApiRuntime() {
  if (!global.taskApiRuntime) {
    global.taskApiRuntime =
      createTaskApiRuntime();
  }

  return global.taskApiRuntime;
}