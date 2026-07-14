import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type SearchSource =
  | "NOTE"
  | "CAPTURE"
  | "PROJECT"
  | "TASK"
  | "KNOWLEDGE_DOCUMENT";

export interface SearchResultEntity extends BaseEntity {
  source: SearchSource;

  title: string;

  content: string;
}