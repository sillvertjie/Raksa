import { PromptModel } from "../models/prompt.model";
import { PromptRegistry } from "../registry/prompt.registry";

export class PromptResolver {
  constructor(
    private readonly registry: PromptRegistry,
  ) {}

  resolve(id: string): PromptModel {
    const prompt = this.registry.get(id);

    if (!prompt) {
      throw new Error(
        `Prompt with id "${id}" not found`,
      );
    }

    return prompt;
  }
}
