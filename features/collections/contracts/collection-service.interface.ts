import type { CreateCollectionDto } from "../dto/create-collection.dto";
import type { UpdateCollectionDto } from "../dto/update-collection.dto";
import type { Collection } from "../entities/collection.entity";

export interface CollectionService {
  create(dto: CreateCollectionDto): Promise<Collection>;

  update(id: string, dto: UpdateCollectionDto): Promise<Collection>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<Collection | null>;

  getAll(): Promise<Collection[]>;

  getChildren(parentId: string): Promise<Collection[]>;
}