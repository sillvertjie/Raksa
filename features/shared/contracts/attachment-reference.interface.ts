import type { EntityReference } from "./entity-reference.interface";

export interface AttachmentReference extends EntityReference {
  readonly attachmentId: string;
}