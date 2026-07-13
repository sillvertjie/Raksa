import type { CreateCollectionDto } from "../dto/create-collection.dto";
import type { UpdateCollectionDto } from "../dto/update-collection.dto";

export class CollectionValidator {
  static validateCreate(dto: CreateCollectionDto): void {
    this.validateName(dto.name);

    if (dto.description !== undefined) {
      this.validateDescription(dto.description);
    }
  }

  static validateUpdate(dto: UpdateCollectionDto): void {
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
      throw new Error("Collection name is required.");
    }

    if (value.length > 100) {
      throw new Error("Collection name must not exceed 100 characters.");
    }
  }

  private static validateDescription(description: string): void {
    if (description.length > 500) {
      throw new Error(
        "Collection description must not exceed 500 characters.",
      );
    }
  }
}