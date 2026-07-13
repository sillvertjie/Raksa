import type { CommandBus } from "../contracts/command-bus.interface";
import type { Command } from "../contracts/command.interface";
import type { CommandHandler } from "../contracts/command-handler.interface";

export class InMemoryCommandBus implements CommandBus {
  private readonly handlers = new Map<string, CommandHandler>();

  async execute(command: Command): Promise<unknown> {
    const handler = this.handlers.get(command.type);

    if (!handler) {
      throw new Error(
        `No command handler registered for "${command.type}".`,
      );
    }

    return handler.execute(command);
  }

  register(
    commandType: string,
    handler: CommandHandler,
  ): void {
    this.handlers.set(commandType, handler);
  }
}