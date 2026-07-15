import { InMemoryProjectRepository } from "./project.repository";

declare global {
  var raksaProjectRepository:
    | InMemoryProjectRepository
    | undefined;
}

export function getProjectRepository() {
  if (!global.raksaProjectRepository) {
    global.raksaProjectRepository =
      new InMemoryProjectRepository();
  }

  return global.raksaProjectRepository;
}