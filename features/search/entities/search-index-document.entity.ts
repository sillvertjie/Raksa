import type { BaseEntity } from "@/features/shared/contracts/base-entity.interface";

export type SearchSource =
  | "NOTE"
  | "CAPTURE"
  | "PROJECT"
  | "TASK"
  | "KNOWLEDGE_DOCUMENT";

export interface SearchIndexDocument extends BaseEntity {
  scopeId: string;

  source: SearchSource;

  title: string;

  content: string;
}