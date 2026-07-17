import type { Command } from "@/features/shared/contracts/command.interface";
import type { CreateInvitationDto } from "../dto/create-invitation.dto";

export class CreateInvitationCommand implements Command {
  readonly type = "invitation.create";

  constructor(
    public readonly dto: CreateInvitationDto,
  ) {}
}