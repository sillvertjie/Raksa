import { InMemoryWorkspaceReadModelRepository } from "./in-memory-workspace-read-model.repository";

declare global {
  var raksaWorkspaceReadModelRepository:
    | InMemoryWorkspaceReadModelRepository
    | undefined;
}

export function getWorkspaceReadModelRepository() {
  if (!global.raksaWorkspaceReadModelRepository) {
    global.raksaWorkspaceReadModelRepository =
      new InMemoryWorkspaceReadModelRepository();
  }

  return global.raksaWorkspaceReadModelRepository;
}