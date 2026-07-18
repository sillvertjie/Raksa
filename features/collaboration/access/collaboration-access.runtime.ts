import { InMemoryMembershipRepository } from "../repositories/membership.repository";

import { DefaultPermissionEvaluationService } from "./permission-evaluation/permission-evaluation.service";
import { DefaultWorkspaceAccessService } from "./workspace-access.service";

import { seedDevelopmentMembership } from "./development-membership.seed";


const membershipRepository =
  new InMemoryMembershipRepository();


if (
  process.env.NODE_ENV === "development" &&
  process.env.DEV_USER_ID
) {
  seedDevelopmentMembership(
    membershipRepository,
    process.env.DEV_USER_ID,
  );
}


export const workspaceAccessService =
  new DefaultWorkspaceAccessService(
    membershipRepository,
  );


export const permissionEvaluationService =
  new DefaultPermissionEvaluationService(
    membershipRepository,
  );


export { membershipRepository };