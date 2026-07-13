import type { Command } from "./command.interface";
import type { CommandHandler } from "./command-handler.interface";

export interface CommandBus {
  execute(command: Command): Promise<unknown>;

  register(
    commandType: string,
    handler: CommandHandler,
  ): void;
}