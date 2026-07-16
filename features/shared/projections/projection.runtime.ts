import { ProjectionDispatcher } from "./projection-dispatcher";
import { ProjectionRegistry } from "./projection-registry";
import { InMemoryProjectionStore } from "./in-memory-projection-store";
import { WorkspaceProjection } from "./workspace.projection";

const registry = new ProjectionRegistry();
const store = new InMemoryProjectionStore();

const dispatcher = new ProjectionDispatcher(registry);

dispatcher.register(new WorkspaceProjection(store));

export { dispatcher as projectionDispatcher };