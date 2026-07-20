import type { EventBus } from "@/features/shared/contracts/event-bus.interface";
import type { DomainEvent } from "@/features/shared/contracts/domain-event.interface";

import type { SearchEventConsumer } from "../contracts/search-event-consumer.interface";

import type { TaskSearchReaderContract } from "../contracts/task-search-reader.interface";
import type { ProjectSearchReaderContract } from "../contracts/project-search-reader.interface";
import type { KnowledgeSearchReaderContract } from "../contracts/knowledge-search-reader.interface";
import type { FileSearchReaderContract } from "../contracts/file-search-reader.interface";

import type { SearchIndexService } from "../services/search-index.service";

import { DEFAULT_SEARCH_SCOPE } from "../constants/search-scope.constant";
import { createSearchDocumentId } from "../constants/search-document-id.constant";


export class DefaultSearchEventConsumer
  implements SearchEventConsumer
{
  private readonly handler: (
    event: DomainEvent,
  ) => Promise<void>;

  constructor(
    private readonly eventBus: EventBus,
    private readonly indexService: SearchIndexService,
    private readonly taskReader: TaskSearchReaderContract,
    private readonly projectReader: ProjectSearchReaderContract,
    private readonly knowledgeReader: KnowledgeSearchReaderContract,
    private readonly fileReader: FileSearchReaderContract,
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


    this.eventBus.subscribe(
      "project.created",
      this.handler,
    );

    this.eventBus.subscribe(
      "project.updated",
      this.handler,
    );

    this.eventBus.subscribe(
      "project.deleted",
      this.handler,
    );


    this.eventBus.subscribe(
      "knowledge.created",
      this.handler,
    );

    this.eventBus.subscribe(
      "knowledge.updated",
      this.handler,
    );

    this.eventBus.subscribe(
      "knowledge.deleted",
      this.handler,
    );


    this.eventBus.subscribe(
      "file.uploaded",
      this.handler,
    );
  }


  async handle(
    event: DomainEvent,
  ): Promise<void> {

    switch (event.type) {

      case "task.created":
      case "task.updated":
        await this.indexTask(event);
        return;


      case "task.deleted":
        await this.removeEntity(
          "TASK",
          event.payload as {
            taskId: string;
          },
        );

        return;


      case "project.created":
      case "project.updated":
        await this.indexProject(event);
        return;


      case "project.deleted":
        await this.removeEntity(
          "PROJECT",
          event.payload as {
            projectId: string;
          },
        );

        return;


      case "knowledge.created":
      case "knowledge.updated":
        await this.indexKnowledge(event);
        return;


      case "knowledge.deleted":
        await this.removeEntity(
          "KNOWLEDGE_DOCUMENT",
          event.payload as {
            knowledgeId: string;
          },
        );

        return;


      case "file.uploaded":
        await this.indexFile(event);
        return;
    }
  }


  private async indexTask(
    event: DomainEvent,
  ): Promise<void> {

    const payload =
      event.payload as {
        taskId: string;
      };


    const task =
      await this.taskReader.getTask(
        payload.taskId,
      );


    if (!task) {
      return;
    }


    await this.indexService.index({
      id: createSearchDocumentId(
        "TASK",
        task.id,
      ),

      scopeId: DEFAULT_SEARCH_SCOPE,

      source: "TASK",

      title: task.title,

      content:
        task.description ?? task.title,

      createdAt: task.createdAt,

      updatedAt: task.updatedAt,
    });
  }


  private async indexProject(
    event: DomainEvent,
  ): Promise<void> {

    const payload =
      event.payload as {
        projectId: string;
      };


    const project =
      await this.projectReader.getProject(
        payload.projectId,
      );


    if (!project) {
      return;
    }


    await this.indexService.index({
      id: createSearchDocumentId(
        "PROJECT",
        project.id,
      ),

      scopeId: DEFAULT_SEARCH_SCOPE,

      source: "PROJECT",

      title: project.name,

      content:
        project.description ?? project.name,

      createdAt: project.createdAt,

      updatedAt: project.updatedAt,
    });
  }


  private async indexKnowledge(
    event: DomainEvent,
  ): Promise<void> {

    const payload =
      event.payload as {
        knowledgeId: string;
      };


    const knowledge =
      await this.knowledgeReader.getKnowledge(
        payload.knowledgeId,
      );


    if (!knowledge) {
      return;
    }


    await this.indexService.index({
      id: createSearchDocumentId(
        "KNOWLEDGE_DOCUMENT",
        knowledge.id,
      ),

      scopeId: DEFAULT_SEARCH_SCOPE,

      source: "KNOWLEDGE_DOCUMENT",

      title: knowledge.title,

      content: knowledge.title,

      createdAt: knowledge.createdAt,

      updatedAt: knowledge.updatedAt,
    });
  }


  private async indexFile(
    event: DomainEvent,
  ): Promise<void> {

    const payload =
      event.payload as {
        fileId: string;
      };


    const file =
      await this.fileReader.getFile(
        payload.fileId,
      );


    if (!file) {
      return;
    }


    await this.indexService.index({
      id: createSearchDocumentId(
        "FILE",
        file.id,
      ),

      scopeId: DEFAULT_SEARCH_SCOPE,

      source: "FILE",

      title: file.name,

      content:
        file.name,

      createdAt: file.createdAt,

      updatedAt: file.updatedAt,
    });
  }


  private async removeEntity(
    source:
      | "TASK"
      | "PROJECT"
      | "KNOWLEDGE_DOCUMENT",
    payload:
      | {
          taskId: string;
        }
      | {
          projectId: string;
        }
      | {
          knowledgeId: string;
        },
  ): Promise<void> {

    const id =
      "taskId" in payload
        ? payload.taskId
        : "projectId" in payload
          ? payload.projectId
          : payload.knowledgeId;


    await this.indexService.remove(
      createSearchDocumentId(
        source,
        id,
      ),
    );
  }
}