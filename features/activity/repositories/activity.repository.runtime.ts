import { InMemoryActivityRepository } from "./activity.repository";

declare global {
  var raksaActivityRepository:
    | InMemoryActivityRepository
    | undefined;
}

export function getActivityRepository() {
  if (!global.raksaActivityRepository) {
    global.raksaActivityRepository =
      new InMemoryActivityRepository();
  }

  return global.raksaActivityRepository;
}

/**
 * Activity Repository Runtime
 *
 * Single runtime instance untuk Activity Read Model.
 *
 * Projection Service dan Query Service
 * menggunakan repository yang sama.
 *
 * Hal ini memastikan:
 *
 * Domain Event
 *      ↓
 * Activity Projection
 *      ↓
 * Activity Repository
 *      ↓
 * Activity Query
 *
 * Future:
 * InMemory repository dapat diganti database repository
 * tanpa mengubah service layer.
 */