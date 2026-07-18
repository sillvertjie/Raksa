import type { ActivityRepository } from "../contracts/activity-repository.interface";

import { projectionDispatcher } from "../../shared/projections/projection.runtime";

import { ActivityProjection } from "../projections/activity.projection";
import { InMemoryActivityRepository } from "../repositories/activity.repository";
import { DefaultActivityProjectionService } from "../services/activity-projection.service";


type ActivityProjectionRuntime = {
  repository: ActivityRepository;
  projection: ActivityProjection;
};


declare global {
  var activityProjectionRuntime:
    | ActivityProjectionRuntime
    | undefined;
}


function createActivityProjectionRuntime(): ActivityProjectionRuntime {
  const repository =
    new InMemoryActivityRepository();

  const service =
    new DefaultActivityProjectionService(
      repository,
    );

  const projection =
    new ActivityProjection(
      service,
    );

  projectionDispatcher.register(
    projection,
  );

  return {
    repository,
    projection,
  };
}


export function getActivityProjectionRuntime() {
  if (!global.activityProjectionRuntime) {
    global.activityProjectionRuntime =
      createActivityProjectionRuntime();
  }

  return global.activityProjectionRuntime;
}