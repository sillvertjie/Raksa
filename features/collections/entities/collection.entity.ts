import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export interface Collection extends BaseEntity {
  name: string;
  description: string | null;
  parentId: string | null;
}