import type { DomainEvent } from "../contracts/domain-event.interface";
import type { Projection } from "../contracts/projection.interface";
import type { ProjectionStore } from "../contracts/projection-store.interface";

export class WorkspaceProjection implements Projection {
  readonly name = "workspace";

  constructor(
    private readonly store: ProjectionStore,
  ) {}

    supports(event: DomainEvent): boolean {
    void event;

    return true;
    }

  async project(event: DomainEvent): Promise<void> {
    await this.store.save(event);
  }
}