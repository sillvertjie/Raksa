import type { ActivityRepository } from "../contracts/activity-repository.interface";

import { projectionDispatcher } from "../../shared/projections/projection.runtime";

import { getActivityRepository } from "../repositories/activity.repository.runtime";
import { DefaultActivityProjectionService } from "../services/activity-projection.service";

import { ActivityProjection } from "../projections/activity.projection";


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
    getActivityRepository();

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

/**
 * Activity Projection Runtime
 *
 * Projection consumer terhadap Domain Event.
 *
 * Repository berasal dari Activity Repository Runtime
 * agar instance yang sama digunakan oleh:
 *
 * - Activity Projection Service
 * - Activity Query Service
 *
 * Activity Timeline menggunakan CQRS read model pattern.
 */