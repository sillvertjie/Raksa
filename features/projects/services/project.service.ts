import type { ProjectRepository } from "../contracts/project-repository.interface";
import type { ProjectService } from "../contracts/project-service.interface";
import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";
import type { Project } from "../entities/project.entity";
import { ProjectValidator } from "../validators/project.validator";

export class DefaultProjectService implements ProjectService {
  constructor(
    private readonly repository: ProjectRepository,
  ) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    ProjectValidator.validateCreate(dto);

    const now = new Date();

    const project: Project = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      description: dto.description ?? null,
      status: "ACTIVE",
    };

    return this.repository.create(project);
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    ProjectValidator.validateUpdate(dto);

    const project = await this.repository.findById(id);

    if (!project) {
      throw new Error("Project not found.");
    }

    const updated: Project = {
      ...project,
      ...dto,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(id: string): Promise<Project | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<Project[]> {
    return this.repository.findAll();
  }
}