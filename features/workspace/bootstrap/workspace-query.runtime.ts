import { getQueryBus } from "@/features/shared/query-bus/query-bus.runtime";

import {
  registerWorkspaceQueries,
} from "./workspace-query.bootstrap";


declare global {
  var workspaceQueryRuntime:
    | ReturnType<typeof createWorkspaceQueryRuntime>
    | undefined;
}


function createWorkspaceQueryRuntime() {
  const queryBus =
    getQueryBus();

  registerWorkspaceQueries(
    queryBus,
  );

  return {
    queryBus,
  };
}


export function getWorkspaceQueryRuntime() {
  if (!global.workspaceQueryRuntime) {
    global.workspaceQueryRuntime =
      createWorkspaceQueryRuntime();
  }

  return global.workspaceQueryRuntime;
}