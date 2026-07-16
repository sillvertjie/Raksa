import type { DomainEvent } from "../contracts/domain-event.interface";
import type { Projection } from "../contracts/projection.interface";

export class ProjectionRegistry {
  private readonly projections = new Map<string, Projection>();

  register(projection: Projection): void {
    this.projections.set(projection.name, projection);
  }

  unregister(projectionName: string): void {
    this.projections.delete(projectionName);
  }

  getSupported(event: DomainEvent): Projection[] {
    return [...this.projections.values()].filter((projection) =>
      projection.supports(event),
    );
  }

  getAll(): Projection[] {
    return [...this.projections.values()];
  }
}