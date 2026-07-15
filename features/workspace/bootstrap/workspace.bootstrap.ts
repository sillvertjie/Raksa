import { getKnowledgeDocumentRepository } from "@/features/knowledge-base/repositories/knowledge-document.repository.runtime";
import { getProjectRepository } from "@/features/projects/repositories/project.repository.runtime";
import { getTaskRepository } from "@/features/tasks/repositories/task.repository.runtime";

import { DefaultWorkspaceAggregationRepository } from "../repositories/workspace-aggregation.repository";
import { DefaultWorkspaceAggregationService } from "../services/workspace-aggregation.service";

declare global {
  var workspaceAggregationService:
    | DefaultWorkspaceAggregationService
    | undefined;
}

function createWorkspaceAggregationService() {
  const repository =
    new DefaultWorkspaceAggregationRepository(
      getProjectRepository(),
      getTaskRepository(),
      getKnowledgeDocumentRepository(),
    );

  return new DefaultWorkspaceAggregationService(
    repository,
  );
}

export function getWorkspaceAggregationService() {
  if (!global.workspaceAggregationService) {
    global.workspaceAggregationService =
      createWorkspaceAggregationService();
  }

  return global.workspaceAggregationService;
}