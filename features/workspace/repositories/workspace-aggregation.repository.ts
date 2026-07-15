import type { KnowledgeDocumentRepository } from "@/features/knowledge-base/contracts/knowledge-document.repository.contract";
import type { ProjectRepository } from "@/features/projects/contracts/project-repository.interface";
import type { TaskRepository } from "@/features/tasks/contracts/task-repository.interface";

import type { WorkspaceAggregationRepository } from "../contracts/workspace-aggregation.repository.interface";
import type { WorkspaceItem } from "../entities/workspace-item.entity";

export class DefaultWorkspaceAggregationRepository
  implements WorkspaceAggregationRepository
{
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly taskRepository: TaskRepository,
    private readonly knowledgeRepository: KnowledgeDocumentRepository,
  ) {}

    async getWorkspace(
    userId: string,
    ): Promise<WorkspaceItem[]> {
    void userId;

    const [
        projects,
        tasks,
        documents,
    ] = await Promise.all([
      this.projectRepository.findAll(),
      this.taskRepository.findAll(),
      this.knowledgeRepository.findAll(),
    ]);

    return [
      ...projects.map<WorkspaceItem>((project) => ({
        id: project.id,
        type: "PROJECT",
        title: project.name,
        description: project.description,
        status: project.status,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      })),

      ...tasks.map<WorkspaceItem>((task) => ({
        id: task.id,
        type: "TASK",
        title: task.title,
        description: task.description,
        status: task.status,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      })),

      ...documents.map<WorkspaceItem>((document) => ({
        id: document.id,
        type: "KNOWLEDGE_DOCUMENT",
        title: document.title,
        description: null,
        parentId: document.parentId,
        createdAt: document.createdAt,
        updatedAt: document.updatedAt,
      })),
    ].sort(
      (a, b) =>
        b.updatedAt.getTime() -
        a.updatedAt.getTime(),
    );
  }
}