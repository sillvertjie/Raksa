import type { Command } from "./command.interface";

export interface CommandHandler<TCommand extends Command = Command> {
  execute(command: TCommand): Promise<unknown>;
}