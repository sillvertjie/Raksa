import type { TagRepository } from "../contracts/tag-repository.interface";
import type { Tag } from "../entities/tag.entity";

export class InMemoryTagRepository implements TagRepository {
  private readonly tags = new Map<string, Tag>();

  async create(tag: Tag): Promise<Tag> {
    this.tags.set(tag.id, tag);

    return tag;
  }

  async update(tag: Tag): Promise<Tag> {
    this.tags.set(tag.id, tag);

    return tag;
  }

  async delete(id: string): Promise<void> {
    this.tags.delete(id);
  }

  async findById(id: string): Promise<Tag | null> {
    return this.tags.get(id) ?? null;
  }

  async findBySlug(slug: string): Promise<Tag | null> {
    for (const tag of this.tags.values()) {
      if (tag.slug === slug) {
        return tag;
      }
    }

    return null;
  }

  async findAll(): Promise<Tag[]> {
    return [...this.tags.values()];
  }
}