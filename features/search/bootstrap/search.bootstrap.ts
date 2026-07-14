import { getEventBus } from "@/features/shared/event-bus/event-bus.runtime";
import { getTaskRepository } from "@/features/tasks/repositories/task.repository.runtime";

import { PrismaLegacySearchRepository } from "../repositories/prisma-legacy-search.repository";
import { PrismaSearchIndexRepository } from "../repositories/prisma-search-index.repository";

import { SearchService } from "../services/search.service";
import { SearchIndexService } from "../services/search-index.service";

import { DefaultSearchEventConsumer } from "../consumers/search-event.consumer";
import { TaskSearchReader } from "../readers/task-search.reader";


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


export {
  searchIndexRepository,
  searchIndexService,
  searchEventConsumer,
};