import { aiRuntime } from "@/ai/bootstrap/ai.runtime";
import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";
import { getQueryBus } from "@/features/shared/query-bus/query-bus.runtime";
import { getTaskRepository } from "@/features/tasks/repositories/task.repository.runtime";

import { DefaultSearchEventConsumer } from "../consumers/search-event.consumer";
import { SearchQueryHandler } from "../handlers/search.query-handler";
import { TaskSearchReader } from "../readers/task-search.reader";

import { PrismaLegacySearchRepository } from "../repositories/prisma-legacy-search.repository";
import { PrismaSearchIndexRepository } from "../repositories/prisma-search-index.repository";

import { SearchIndexService } from "../services/search-index.service";
import { SearchService } from "../services/search.service";
import { DefaultSearchAIBridge } from "../services/default-search-ai-bridge.service";


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


const taskRepository =
  getTaskRepository();


const taskSearchReader =
  new TaskSearchReader(
    taskRepository,
  );


const searchEventConsumer =
  new DefaultSearchEventConsumer(
    getEventBus(),
    searchIndexService,
    taskSearchReader,
  );


searchEventConsumer.register();


export const searchAIBridge =
  new DefaultSearchAIBridge(
    aiRuntime.aiService,
  );


export {
  searchIndexRepository,
  searchIndexService,
  searchEventConsumer,
};