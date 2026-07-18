import type { ProjectRepository } from "../contracts/project-repository.interface";
import type { Project } from "../entities/project.entity";

export class InMemoryProjectRepository implements ProjectRepository {
  private readonly projects = new Map<string, Project>();

  async create(project: Project): Promise<Project> {
    this.projects.set(project.id, project);

    return project;
  }

  async update(project: Project): Promise<Project> {
    this.projects.set(project.id, project);

    return project;
  }

  async delete(id: string): Promise<void> {
  this.projects.delete(id);
}

  async findById(id: string): Promise<Project | null> {
    return this.projects.get(id) ?? null;
  }

  async findAll(): Promise<Project[]> {
    return [...this.projects.values()];
  }
}