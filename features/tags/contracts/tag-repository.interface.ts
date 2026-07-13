import type { Tag } from "../entities/tag.entity";

export interface TagRepository {
  create(tag: Tag): Promise<Tag>;

  update(tag: Tag): Promise<Tag>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<Tag | null>;

  findBySlug(slug: string): Promise<Tag | null>;

  findAll(): Promise<Tag[]>;
}