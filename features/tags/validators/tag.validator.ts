import type { CreateTagDto } from "../dto/create-tag.dto";
import type { UpdateTagDto } from "../dto/update-tag.dto";

export class TagValidator {
  static validateCreate(dto: CreateTagDto): void {
    this.validateName(dto.name);
    this.validateSlug(dto.slug);
    this.validateColor(dto.color);

    if (dto.description !== undefined) {
      this.validateDescription(dto.description);
    }
  }

  static validateUpdate(dto: UpdateTagDto): void {
    if (dto.name !== undefined) {
      this.validateName(dto.name);
    }

    if (dto.slug !== undefined) {
      this.validateSlug(dto.slug);
    }

    if (dto.color !== undefined) {
      this.validateColor(dto.color);
    }

    if (dto.description !== undefined && dto.description !== null) {
      this.validateDescription(dto.description);
    }
  }

  private static validateName(name: string): void {
    const value = name.trim();

    if (value.length === 0) {
      throw new Error("Tag name is required.");
    }

    if (value.length > 50) {
      throw new Error("Tag name must not exceed 50 characters.");
    }
  }

  private static validateSlug(slug: string): void {
    const value = slug.trim();

    if (value.length === 0) {
      throw new Error("Tag slug is required.");
    }

    if (!/^[a-z0-9-]+$/.test(value)) {
      throw new Error(
        "Tag slug may only contain lowercase letters, numbers, and hyphens.",
      );
    }
  }

  private static validateColor(color: string): void {
    const value = color.trim();

    if (!/^#[0-9A-Fa-f]{6}$/.test(value)) {
      throw new Error(
        "Tag color must be a valid hexadecimal color (e.g. #3B82F6).",
      );
    }
  }

  private static validateDescription(description: string): void {
    if (description.length > 255) {
      throw new Error("Tag description must not exceed 255 characters.");
    }
  }
}
