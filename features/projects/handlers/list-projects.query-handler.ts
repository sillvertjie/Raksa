import type { QueryHandler } from "../../shared/contracts/query-handler.interface";
import type { ProjectRepository } from "../contracts/project-repository.interface";
import type { Project } from "../entities/project.entity";
import type { ListProjectsQuery } from "../queries/list-projects.query";

export class ListProjectsQueryHandler
  implements QueryHandler<ListProjectsQuery, Project[]>
{
  constructor(
    private readonly repository: ProjectRepository,
  ) {}

  async execute(
    query: ListProjectsQuery,
  ): Promise<Project[]> {
    return this.repository.findAll(
      query.workspaceId,
    );
  }
}