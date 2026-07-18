import { membershipRepository } from "../collaboration-access.runtime";
import { WorkspaceContextResolver } from "./workspace-context.resolver";

export const workspaceContextResolver =
  new WorkspaceContextResolver(
    membershipRepository,
  );