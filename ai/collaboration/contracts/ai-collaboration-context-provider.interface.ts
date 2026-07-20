import type { Permission } from "@/features/collaboration/permissions/permission.entity";

export interface AICollaborationContextProvider {
  build(
    input: AICollaborationContextInput,
  ): Promise<AICollaborationContext>;
}

export interface AICollaborationContextInput {
  workspaceId: string;
  userId: string;
}

export interface AICollaborationContext {
  workspaceId: string;
  userId: string;
  permissions: Permission[];
}