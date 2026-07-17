import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { CollaborationSessionService } from "../contracts/collaboration-session-service.interface";
import type { CollaborationSession } from "../entities/collaboration-session.entity";

import { CreateCollaborationSessionCommand } from "../commands/create-collaboration-session.command";

export class CreateCollaborationSessionCommandHandler
  implements CommandHandler<CreateCollaborationSessionCommand>
{
  constructor(
    private readonly service: CollaborationSessionService,
  ) {}

  async execute(
    command: CreateCollaborationSessionCommand,
  ): Promise<CollaborationSession> {
    return this.service.create(command.dto);
  }
}