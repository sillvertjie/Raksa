import type { CommandHandler } from "@/features/shared/contracts/command-handler.interface";
import type { CollaborationSessionService } from "../contracts/collaboration-session-service.interface";

import { EndCollaborationSessionCommand } from "../commands/end-collaboration-session.command";

export class EndCollaborationSessionCommandHandler
  implements CommandHandler<EndCollaborationSessionCommand>
{
  constructor(
    private readonly service: CollaborationSessionService,
  ) {}

  async execute(
    command: EndCollaborationSessionCommand,
  ): Promise<void> {
    return this.service.end(command.id);
  }
}