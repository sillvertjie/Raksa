import type { QueryHandler } from "@/features/shared/contracts/query-handler.interface";
import type { CollaborationSession } from "../entities/collaboration-session.entity";
import type { CollaborationSessionService } from "../contracts/collaboration-session-service.interface";

import { GetCollaborationSessionQuery } from "../queries/get-collaboration-session.query";

export class GetCollaborationSessionQueryHandler
  implements QueryHandler<GetCollaborationSessionQuery>
{
  constructor(
    private readonly service: CollaborationSessionService,
  ) {}

  async execute(
    query: GetCollaborationSessionQuery,
  ): Promise<CollaborationSession | null> {
    return this.service.getById(query.id);
  }
}