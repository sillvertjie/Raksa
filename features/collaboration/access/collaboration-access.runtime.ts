import { InMemoryMembershipRepository } from "../repositories/membership.repository";
import { DefaultPermissionEvaluationService } from "./permission-evaluation/permission-evaluation.service";
import { DefaultWorkspaceAccessService } from "./workspace-access.service";

const membershipRepository =
  new InMemoryMembershipRepository();

export const workspaceAccessService =
  new DefaultWorkspaceAccessService(
    membershipRepository,
  );

export const permissionEvaluationService =
  new DefaultPermissionEvaluationService(
    membershipRepository,
  );

export { membershipRepository };