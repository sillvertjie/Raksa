import { InMemoryTaskRepository } from "./task.repository";

declare global {
  var raksaTaskRepository:
    | InMemoryTaskRepository
    | undefined;
}

export function getTaskRepository() {
  if (!global.raksaTaskRepository) {
    global.raksaTaskRepository =
      new InMemoryTaskRepository();
  }

  return global.raksaTaskRepository;
}