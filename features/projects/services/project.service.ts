import type { ProjectRepository } from "../contracts/project-repository.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";
import type { Project } from "../entities/project.entity";
import { ProjectValidator } from "../validators/project.validator";

export class DefaultProjectService
  implements ProjectService
{
  constructor(
    private readonly repository: ProjectRepository,
  ) {}

  async create(
    workspaceId: string,
    dto: CreateProjectDto,
  ): Promise<Project> {
    ProjectValidator.validateCreate(dto);

    const now = new Date();

    const project: Project = {
      id: crypto.randomUUID(),
      workspaceId,
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      description: dto.description ?? null,
      status: "ACTIVE",
    };

    return this.repository.create(project);
  }

  async update(
    workspaceId: string,
    id: string,
    dto: UpdateProjectDto,
  ): Promise<Project> {
    ProjectValidator.validateUpdate(dto);

    const project =
      await this.repository.findById(
        workspaceId,
        id,
      );

    if (!project) {
      throw new Error("Project not found.");
    }

    const updated: Project = {
      ...project,
      name: dto.name ?? project.name,
      description:
        dto.description !== undefined
          ? dto.description
          : project.description,
      status: dto.status ?? project.status,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(
  workspaceId: string,
  id: string,
): Promise<void> {
  const project = await this.repository.findById(
    workspaceId,
    id,
  );

  if (!project) {
    throw new Error("Project not found.");
  }

  await this.repository.delete(id);
}
  async getById(
    workspaceId: string,
    id: string,
  ): Promise<Project | null> {
    return this.repository.findById(
      workspaceId,
      id,
    );
  }

  async getAll(
    workspaceId: string,
  ): Promise<Project[]> {
    return this.repository.findAll(
      workspaceId,
    );
  }
}