import { AIService } from "../../../ai/service";

import { ProductivityContext } from "../context/productivity-context.builder";

export interface ProductivityProcessor {
  process(
    context: ProductivityContext,
  ): Promise<string>;
}

export class DefaultProductivityProcessor
  implements ProductivityProcessor
{
  constructor(
    private readonly aiService: AIService,
  ) {}

  async process(
    context: ProductivityContext,
  ): Promise<string> {
    const response = await this.aiService.execute({
      message: context.input,
      options: {
        action: context.action,
        instruction: context.instruction,
      },
    });

    return response.message;
  }
}