import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export interface Tag extends BaseEntity {
  name: string;
  slug: string;
  color: string;
  description: string | null;
}