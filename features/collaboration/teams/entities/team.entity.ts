import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export interface Team extends BaseEntity {
  workspaceId: string;
  name: string;
  description: string | null;
}