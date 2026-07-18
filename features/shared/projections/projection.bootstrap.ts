import { getActivityProjectionRuntime } from "@/features/activity/bootstrap/activity-projection.bootstrap";

import { getEventBus } from "../event-bus/event-bus.runtime";

import { projectionDispatcher } from "./projection.runtime";


let bootstrapped = false;


const projectionEventTypes = [
  "project.created",
  "project.updated",
  "task.created",
  "task.updated",
  "knowledge.created",
  "invitation.created",
  "membership.created",
];


export function bootstrapProjections(): void {
  if (bootstrapped) {
    return;
  }


  const eventBus = getEventBus();


  getActivityProjectionRuntime();


  for (const eventType of projectionEventTypes) {
    eventBus.subscribe(
      eventType,
      async (event) => {
        await projectionDispatcher.dispatch(event);
      },
    );
  }


  bootstrapped = true;
}