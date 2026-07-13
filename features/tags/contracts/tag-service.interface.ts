import type { CreateTagDto } from "../dto/create-tag.dto";
import type { UpdateTagDto } from "../dto/update-tag.dto";
import type { Tag } from "../entities/tag.entity";

export interface TagService {
  create(dto: CreateTagDto): Promise<Tag>;

  update(id: string, dto: UpdateTagDto): Promise<Tag>;

  delete(id: string): Promise<void>;

  getById(id: string): Promise<Tag | null>;

  getAll(): Promise<Tag[]>;
}