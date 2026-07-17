import type { CommandBus } from "@/features/shared/contracts/command-bus.interface";
import type { QueryBus } from "@/features/shared/contracts/query-bus.interface";

import type { InvitationService } from "../contracts/invitation-service.interface";
import type { InvitationRepository } from "../contracts/invitation-repository.interface";

import { CreateInvitationCommandHandler } from "../handlers/create-invitation.command-handler";
import { AcceptInvitationCommandHandler } from "../handlers/accept-invitation.command-handler";
import { RevokeInvitationCommandHandler } from "../handlers/revoke-invitation.command-handler";

import { GetInvitationQueryHandler } from "../handlers/get-invitation.query-handler";
import { ListWorkspaceInvitationsQueryHandler } from "../handlers/list-workspace-invitations.query-handler";

export function registerInvitationCommands(
  commandBus: CommandBus,
  invitationService: InvitationService,
): void {
  commandBus.register(
    "invitation.create",
    new CreateInvitationCommandHandler(
      invitationService,
    ),
  );

  commandBus.register(
    "invitation.accept",
    new AcceptInvitationCommandHandler(
      invitationService,
    ),
  );

  commandBus.register(
    "invitation.revoke",
    new RevokeInvitationCommandHandler(
      invitationService,
    ),
  );
}

export function registerInvitationQueries(
  queryBus: QueryBus,
  repository: InvitationRepository,
): void {
  queryBus.register(
    "invitation.get",
    new GetInvitationQueryHandler(
      repository,
    ),
  );

  queryBus.register(
    "invitation.list",
    new ListWorkspaceInvitationsQueryHandler(
      repository,
    ),
  );
}