import { aiRuntime } from "@/ai/bootstrap/ai.runtime";
import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";
import { getQueryBus } from "@/features/shared/query-bus/query-bus.runtime";

import { getTaskRepository } from "@/features/tasks/repositories/task.repository.runtime";
import { getProjectRepository } from "@/features/projects/repositories/project.repository.runtime";
import { getKnowledgeDocumentRepository } from "@/features/knowledge-base/repositories/knowledge-document.repository.runtime";

import { DefaultSearchEventConsumer } from "../consumers/search-event.consumer";

import { SearchQueryHandler } from "../handlers/search.query-handler";

import { TaskSearchReader } from "../readers/task-search.reader";
import { ProjectSearchReader } from "../readers/project-search.reader";
import { KnowledgeSearchReader } from "../readers/knowledge-search.reader";
import { FileSearchReader } from "../readers/file-search.reader";

import { PrismaLegacySearchRepository } from "../repositories/prisma-legacy-search.repository";
import { PrismaSearchIndexRepository } from "../repositories/prisma-search-index.repository";

import { SearchIndexService } from "../services/search-index.service";
import { SearchService } from "../services/search.service";
import { DefaultSearchAIBridge } from "../services/default-search-ai-bridge.service";

import { InMemoryFileRepository } from "@/features/files/repositories/file.repository";


const legacyRepository =
  new PrismaLegacySearchRepository();


export const searchService =
  new SearchService(
    legacyRepository,
  );


const searchIndexRepository =
  new PrismaSearchIndexRepository();


const searchIndexService =
  new SearchIndexService(
    searchIndexRepository,
  );


const searchQueryHandler =
  new SearchQueryHandler(
    searchIndexRepository,
  );


getQueryBus().register(
  "search.query",
  searchQueryHandler,
);


// ================================
// Search Source Readers
// ================================

const taskRepository =
  getTaskRepository();


const taskSearchReader =
  new TaskSearchReader(
    taskRepository,
);


const projectSearchReader =
  new ProjectSearchReader(
    getProjectRepository(),
);


const knowledgeSearchReader =
  new KnowledgeSearchReader(
    getKnowledgeDocumentRepository(),
);


const fileSearchReader =
  new FileSearchReader(
    new InMemoryFileRepository(),
);


// ================================
// Search Event Consumer
// ================================

const searchEventConsumer =
  new DefaultSearchEventConsumer(
    getEventBus(),
    searchIndexService,
    taskSearchReader,
    projectSearchReader,
    knowledgeSearchReader,
    fileSearchReader,
  );


searchEventConsumer.register();


// ================================
// AI Search Bridge
// ================================

export const searchAIBridge =
  new DefaultSearchAIBridge(
    aiRuntime.aiService,
  );


export {
  searchIndexRepository,
  searchIndexService,
  searchEventConsumer,
};