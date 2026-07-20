import { projectionDispatcher } from "@/features/shared/projections/projection.runtime";

import { WorkspaceReadModelProjection } from "../projections/workspace.projection";
import { getWorkspaceReadModelRepository } from "../repositories/workspace-read-model.repository.runtime";

declare global {
  var raksaWorkspaceProjectionBootstrapped:
    | boolean
    | undefined;
}

export function bootstrapWorkspaceProjection(): void {
  if (global.raksaWorkspaceProjectionBootstrapped) {
    return;
  }

  projectionDispatcher.register(
    new WorkspaceReadModelProjection(
      getWorkspaceReadModelRepository(),
    ),
  );

  global.raksaWorkspaceProjectionBootstrapped =
    true;
}