import type { QueryHandler } from "../../shared/contracts/query-handler.interface";
import type { ProjectRepository } from "../contracts/project-repository.interface";
import type { Project } from "../entities/project.entity";
import type { GetProjectQuery } from "../queries/get-project.query";

export class GetProjectQueryHandler
  implements QueryHandler<GetProjectQuery, Project | null>
{
  constructor(
    private readonly repository: ProjectRepository,
  ) {}

  async execute(
    query: GetProjectQuery,
  ): Promise<Project | null> {
    return this.repository.findById(
      query.workspaceId,
      query.id,
    );
  }
}