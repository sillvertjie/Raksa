import type { Command } from "@/features/shared/contracts/command.interface";

export class RemoveMembershipCommand implements Command {
  readonly type = "membership.remove";

  constructor(
    public readonly id: string,
  ) {}
}