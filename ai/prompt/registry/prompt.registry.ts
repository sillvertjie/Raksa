import { PromptModel } from "../models/prompt.model";

export class PromptRegistry {
  private readonly prompts: Map<string, PromptModel>;

  constructor() {
    this.prompts = new Map();
  }

  register(prompt: PromptModel): void {
    this.prompts.set(prompt.id, prompt);
  }

  get(id: string): PromptModel | undefined {
    return this.prompts.get(id);
  }

  has(id: string): boolean {
    return this.prompts.has(id);
  }

  remove(id: string): boolean {
    return this.prompts.delete(id);
  }

  clear(): void {
    this.prompts.clear();
  }
}
