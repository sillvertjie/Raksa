import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type ProjectStatus =
  | "ACTIVE"
  | "COMPLETED"
  | "ARCHIVED";

export interface Project extends BaseEntity {
  name: string;
  description: string | null;
  status: ProjectStatus;
}