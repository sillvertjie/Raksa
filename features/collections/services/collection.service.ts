import type { CollectionRepository } from "../contracts/collection-repository.interface";
import type { CollectionService } from "../contracts/collection-service.interface";
import type { CreateCollectionDto } from "../dto/create-collection.dto";
import type { UpdateCollectionDto } from "../dto/update-collection.dto";
import type { Collection } from "../entities/collection.entity";
import { CollectionValidator } from "../validators/collection.validator";

export class DefaultCollectionService implements CollectionService {
  constructor(
    private readonly repository: CollectionRepository,
  ) {}

  async create(dto: CreateCollectionDto): Promise<Collection> {
    CollectionValidator.validateCreate(dto);

    if (dto.parentId) {
      const parent = await this.repository.findById(dto.parentId);

      if (!parent) {
        throw new Error("Parent collection not found.");
      }
    }

    const now = new Date();

    const collection: Collection = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      description: dto.description?.trim() ?? null,
      parentId: dto.parentId ?? null,
    };

    return this.repository.create(collection);
  }

  async update(
    id: string,
    dto: UpdateCollectionDto,
  ): Promise<Collection> {
    CollectionValidator.validateUpdate(dto);

    const collection = await this.repository.findById(id);

    if (!collection) {
      throw new Error("Collection not found.");
    }

    if (dto.parentId && dto.parentId !== collection.parentId) {
      const parent = await this.repository.findById(dto.parentId);

      if (!parent) {
        throw new Error("Parent collection not found.");
      }
    }

    const updated: Collection = {
      ...collection,
      ...dto,
      description:
        dto.description !== undefined
          ? dto.description.trim()
          : collection.description,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(id: string): Promise<Collection | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<Collection[]> {
    return this.repository.findAll();
  }

  async getChildren(parentId: string): Promise<Collection[]> {
    return this.repository.findChildren(parentId);
  }
}