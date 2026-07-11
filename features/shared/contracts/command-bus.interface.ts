import type { Command } from "./command.interface";
import type { CommandHandler } from "./command-handler.interface";

export interface CommandBus {
  execute(command: Command): void;

  register(
    commandType: string,
    handler: CommandHandler,
  ): void;
}