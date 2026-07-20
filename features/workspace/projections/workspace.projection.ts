import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";
import type { Projection } from "@/features/shared/contracts/projection.interface";

import type { WorkspaceReadModelRepository } from "../contracts/workspace-read-model.repository.interface";

export class WorkspaceReadModelProjection
  implements Projection
{
  readonly name = "workspace-read-model";

  constructor(
    private readonly repository: WorkspaceReadModelRepository,
  ) {}

  supports(event: DomainEvent): boolean {
    return (
      event.type.startsWith("project.") ||
      event.type.startsWith("task.") ||
      event.type.startsWith("knowledge.") ||
      event.type.startsWith("comment.")
    );
  }

  async project(
    event: DomainEvent,
  ): Promise<void> {
    switch (event.type) {
      case "project.created":
      case "task.created":
      case "knowledge.created":
      case "comment.created":
        await this.handleCreated();
        break;

      case "project.updated":
      case "task.updated":
      case "knowledge.updated":
      case "comment.updated":
        await this.handleUpdated();
        break;

      case "project.deleted":
      case "task.deleted":
      case "knowledge.deleted":
      case "comment.deleted":
        await this.handleDeleted();
        break;

      default:
        break;
    }
  }

  /**
   * DEV-203
   *
   * Foundation implementation.
   *
   * Event payload enrichment akan dilakukan
   * pada evolusi Read Model berikutnya.
   */
    private async handleCreated(): Promise<void> {
    return;
    }

    private async handleUpdated(): Promise<void> {
    return;
    }

    private async handleDeleted(): Promise<void> {
    return;
    }
}