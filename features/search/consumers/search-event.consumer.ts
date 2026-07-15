import type { EventBus } from "@/features/shared/contracts/event-bus.interface";
import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { SearchEventConsumer } from "../contracts/search-event-consumer.interface";
import type { SearchIndexService } from "../services/search-index.service";
import type { SearchSourceReader } from "../contracts/search-source-reader.interface";

import { DEFAULT_SEARCH_SCOPE } from "../constants/search-scope.constant";

export class DefaultSearchEventConsumer
  implements SearchEventConsumer
{
  private readonly handler: (
    event: DomainEvent,
  ) => Promise<void>;

  constructor(
    private readonly eventBus: EventBus,
    private readonly indexService: SearchIndexService,
    private readonly sourceReader: SearchSourceReader,
  ) {
    this.handler = this.handle.bind(this);
  }

  register(): void {
    this.eventBus.subscribe(
      "task.created",
      this.handler,
    );

    this.eventBus.subscribe(
      "task.updated",
      this.handler,
    );

    this.eventBus.subscribe(
      "task.deleted",
      this.handler,
    );
  }

  async handle(
    event: DomainEvent,
  ): Promise<void> {
    if (
      event.type === "task.deleted"
    ) {
      const payload =
        event.payload as {
          taskId: string;
        };

      await this.indexService.remove(
        payload.taskId,
      );

      return;
    }

    const payload =
      event.payload as {
        taskId: string;
      };

    const task =
      await this.sourceReader.getTask(
        payload.taskId,
      );

    if (!task) {
      return;
    }

    await this.indexService.index({
      id: task.id,
      scopeId: DEFAULT_SEARCH_SCOPE,
      source: "TASK",
      title: task.title,
      content:
        task.description ?? task.title,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    });
  }
}