import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export interface WorkspaceFile extends BaseEntity {
  name: string;
  mimeType: string;
  size: number;
  storageKey: string;
}