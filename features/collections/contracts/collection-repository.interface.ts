import type { Collection } from "../entities/collection.entity";

export interface CollectionRepository {
  create(collection: Collection): Promise<Collection>;

  update(collection: Collection): Promise<Collection>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<Collection | null>;

  findAll(): Promise<Collection[]>;

  findChildren(parentId: string): Promise<Collection[]>;
}