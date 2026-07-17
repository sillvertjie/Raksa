import type { CommandBus } from "@/features/shared/contracts/command-bus.interface";
import type { QueryBus } from "@/features/shared/contracts/query-bus.interface";

import type { CollaborationSessionService } from "../contracts/collaboration-session-service.interface";

import { CreateCollaborationSessionCommandHandler } from "../handlers/create-collaboration-session.command-handler";
import { EndCollaborationSessionCommandHandler } from "../handlers/end-collaboration-session.command-handler";
import { GetCollaborationSessionQueryHandler } from "../handlers/get-collaboration-session.query-handler";

export function registerCollaborationSessionCommands(
  commandBus: CommandBus,
  service: CollaborationSessionService,
): void {
  commandBus.register(
    "collaboration-session.create",
    new CreateCollaborationSessionCommandHandler(
      service,
    ),
  );

  commandBus.register(
    "collaboration-session.end",
    new EndCollaborationSessionCommandHandler(
      service,
    ),
  );
}

export function registerCollaborationSessionQueries(
  queryBus: QueryBus,
  service: CollaborationSessionService,
): void {
  queryBus.register(
    "collaboration-session.get",
    new GetCollaborationSessionQueryHandler(
      service,
    ),
  );
}