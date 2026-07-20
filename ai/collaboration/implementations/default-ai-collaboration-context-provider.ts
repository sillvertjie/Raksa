import type { Permission } from "@/features/collaboration/permissions/permission.entity";

import type { PermissionEvaluationService } from "@/features/collaboration/access/permission-evaluation/contracts/permission-evaluation.contract";

import { AI_CONTEXT_PERMISSIONS } from "../constants/ai-context-permissions.constant";

import type {
  AICollaborationContext,
  AICollaborationContextInput,
  AICollaborationContextProvider,
} from "../contracts/ai-collaboration-context-provider.interface";


export class DefaultAICollaborationContextProvider
  implements AICollaborationContextProvider
{
  constructor(
    private readonly permissionEvaluationService: PermissionEvaluationService,
  ) {}

  async build(
    input: AICollaborationContextInput,
  ): Promise<AICollaborationContext> {

    const permissions: Permission[] = [];

    for (const permission of AI_CONTEXT_PERMISSIONS) {
      const allowed =
        await this.permissionEvaluationService.can(
          input.workspaceId,
          input.userId,
          permission,
        );

      if (allowed) {
        permissions.push(permission);
      }
    }

    return {
      workspaceId: input.workspaceId,
      userId: input.userId,
      permissions,
    };
  }
}