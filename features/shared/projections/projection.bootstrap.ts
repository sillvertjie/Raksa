import { getEventBus } from "../event-bus/event-bus.runtime";


export function bootstrapProjections(): void {
  const eventBus = getEventBus();

  // TODO (Epic 7):
  // Register domain event subscriptions here.
  //
  // Example:
  // eventBus.subscribe("task.created", (event) =>
  //   projectionDispatcher.dispatch(event),
  // );

  void eventBus;
}