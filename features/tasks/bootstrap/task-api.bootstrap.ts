import { InMemoryCommandBus } from "../../shared/command-bus/in-memory-command-bus";
import { InMemoryQueryBus } from "../../shared/query-bus/in-memory-query-bus";
import { InMemoryEventBus } from "../../shared/event-bus/in-memory-event-bus";

import { InMemoryTaskRepository } from "../repositories/task.repository";
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
  queryBus: InMemoryQueryBus;
};


declare global {
  var taskApiRuntime:
    | TaskApiRuntime
    | undefined;
}


function createTaskApiRuntime(): TaskApiRuntime {
  const repository =
    new InMemoryTaskRepository();

  const eventBus =
    new InMemoryEventBus();

  const service =
    new DefaultTaskService(
      repository,
      eventBus,
    );

  const commandBus =
    new InMemoryCommandBus();

  const queryBus =
    new InMemoryQueryBus();

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