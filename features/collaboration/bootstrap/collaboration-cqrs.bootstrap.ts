import type { CommandBus } from "@/features/shared/contracts/command-bus.interface";
import type { QueryBus } from "@/features/shared/contracts/query-bus.interface";

import type { MembershipService } from "../contracts/membership-service.interface";
import type { MembershipRepository } from "../contracts/membership-repository.interface";

import { CreateMembershipCommandHandler } from "../handlers/create-membership.command-handler";
import { RemoveMembershipCommandHandler } from "../handlers/remove-membership.command-handler";

import { GetMembershipQueryHandler } from "../handlers/get-membership.query-handler";
import { ListWorkspaceMembersQueryHandler } from "../handlers/list-workspace-members.query-handler";

export function registerCollaborationCommands(
  commandBus: CommandBus,
  membershipService: MembershipService,
): void {
  commandBus.register(
    "membership.create",
    new CreateMembershipCommandHandler(
      membershipService,
    ),
  );

  commandBus.register(
    "membership.remove",
    new RemoveMembershipCommandHandler(
      membershipService,
    ),
  );
}

export function registerCollaborationQueries(
  queryBus: QueryBus,
  repository: MembershipRepository,
): void {
  queryBus.register(
    "membership.get",
    new GetMembershipQueryHandler(
      repository,
    ),
  );

  queryBus.register(
    "membership.list",
    new ListWorkspaceMembersQueryHandler(
      repository,
    ),
  );
}