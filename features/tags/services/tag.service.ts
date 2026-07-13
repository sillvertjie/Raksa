import type { TagRepository } from "../contracts/tag-repository.interface";
import type { TagService } from "../contracts/tag-service.interface";
import type { CreateTagDto } from "../dto/create-tag.dto";
import type { UpdateTagDto } from "../dto/update-tag.dto";
import type { Tag } from "../entities/tag.entity";
import { TagValidator } from "../validators/tag.validator";

export class DefaultTagService implements TagService {
  constructor(
    private readonly repository: TagRepository,
  ) {}

  async create(dto: CreateTagDto): Promise<Tag> {
    TagValidator.validateCreate(dto);

    const existing = await this.repository.findBySlug(dto.slug);

    if (existing) {
      throw new Error("Tag slug already exists.");
    }

    const now = new Date();

    const tag: Tag = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      name: dto.name.trim(),
      slug: dto.slug.trim(),
      color: dto.color,
      description: dto.description ?? null,
    };

    return this.repository.create(tag);
  }

  async update(id: string, dto: UpdateTagDto): Promise<Tag> {
    TagValidator.validateUpdate(dto);

    const tag = await this.repository.findById(id);

    if (!tag) {
      throw new Error("Tag not found.");
    }

    if (dto.slug && dto.slug !== tag.slug) {
      const existing = await this.repository.findBySlug(dto.slug);

      if (existing) {
        throw new Error("Tag slug already exists.");
      }
    }

    const updated: Tag = {
      ...tag,
      ...dto,
      updatedAt: new Date(),
    };

    return this.repository.update(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getById(id: string): Promise<Tag | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<Tag[]> {
    return this.repository.findAll();
  }
}