import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";
import type { Project } from "../entities/project.entity";

export interface ProjectService {
  create(dto: CreateProjectDto): Promise<Project>;

  update(id: string, dto: UpdateProjectDto): Promise<Project>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<Project | null>;

  getAll(): Promise<Project[]>;
}