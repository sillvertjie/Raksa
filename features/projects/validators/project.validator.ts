import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";

export class ProjectValidator {
  static validateCreate(dto: CreateProjectDto): void {
    this.validateName(dto.name);

    if (dto.description !== undefined) {
      this.validateDescription(dto.description);
    }
  }

  static validateUpdate(dto: UpdateProjectDto): void {
    if (dto.name !== undefined) {
      this.validateName(dto.name);
    }

    if (dto.description !== undefined && dto.description !== null) {
      this.validateDescription(dto.description);
    }
  }

  private static validateName(name: string): void {
    const value = name.trim();

    if (value.length === 0) {
      throw new Error("Project name is required.");
    }

    if (value.length > 100) {
      throw new Error("Project name must not exceed 100 characters.");
    }
  }

  private static validateDescription(description: string): void {
    if (description.length > 500) {
      throw new Error(
        "Project description must not exceed 500 characters.",
      );
    }
  }
}