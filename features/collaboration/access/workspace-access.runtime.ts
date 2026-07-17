import { InMemoryMembershipRepository } from "../repositories/membership.repository";
import { DefaultWorkspaceAccessService } from "./workspace-access.service";

const membershipRepository =
  new InMemoryMembershipRepository();

export const workspaceAccessService =
  new DefaultWorkspaceAccessService(
    membershipRepository,
  );