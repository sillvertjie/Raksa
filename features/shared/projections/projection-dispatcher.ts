import type { DomainEvent } from "../contracts/domain-event.interface";
import type { Projection } from "../contracts/projection.interface";
import type { ProjectionDispatcher as ProjectionDispatcherContract } from "../contracts/projection-dispatcher.interface";
import { ProjectionRegistry } from "./projection-registry";

export class ProjectionDispatcher
  implements ProjectionDispatcherContract
{
  constructor(
    private readonly registry: ProjectionRegistry,
  ) {}

  register(projection: Projection): void {
    this.registry.register(projection);
  }

  unregister(projectionName: string): void {
    this.registry.unregister(projectionName);
  }

  async dispatch(event: DomainEvent): Promise<void> {
    const projections = this.registry.getSupported(event);

    for (const projection of projections) {
      await projection.project(event);
    }
  }
}