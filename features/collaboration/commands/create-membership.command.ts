import type { Command } from "@/features/shared/contracts/command.interface";
import type { CreateMembershipDto } from "../dto/create-membership.dto";

export class CreateMembershipCommand implements Command {
  readonly type = "membership.create";

  constructor(
    public readonly dto: CreateMembershipDto,
  ) {}
}