import type { CollectionRepository } from "../contracts/collection-repository.interface";
import type { Collection } from "../entities/collection.entity";

export class InMemoryCollectionRepository implements CollectionRepository {
  private readonly collections = new Map<string, Collection>();

  async create(collection: Collection): Promise<Collection> {
    this.collections.set(collection.id, collection);

    return collection;
  }

  async update(collection: Collection): Promise<Collection> {
    this.collections.set(collection.id, collection);

    return collection;
  }

  async delete(id: string): Promise<void> {
    this.collections.delete(id);
  }

  async findById(id: string): Promise<Collection | null> {
    return this.collections.get(id) ?? null;
  }

  async findAll(): Promise<Collection[]> {
    return [...this.collections.values()];
  }

  async findChildren(parentId: string): Promise<Collection[]> {
    return [...this.collections.values()].filter(
      (collection) => collection.parentId === parentId,
    );
  }
}