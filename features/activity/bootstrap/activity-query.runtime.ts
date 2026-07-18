import { getQueryBus } from "../../shared/query-bus/query-bus.runtime";

import {
  registerActivityQueries,
} from "./activity-query.bootstrap";


declare global {
  var activityQueryRuntime:
    | ReturnType<typeof createActivityQueryRuntime>
    | undefined;
}


function createActivityQueryRuntime() {
  const queryBus =
    getQueryBus();

  registerActivityQueries(
    queryBus,
  );

  return {
    queryBus,
  };
}


export function getActivityQueryRuntime() {
  if (!global.activityQueryRuntime) {
    global.activityQueryRuntime =
      createActivityQueryRuntime();
  }

  return global.activityQueryRuntime;
}