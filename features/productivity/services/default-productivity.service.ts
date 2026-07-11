import type { ProductivityService } from "./productivity.service";

import type { ProductivityRequest } from "../contracts/productivity-request";
import type { ProductivityOutputManager } from "../output/contracts/productivity-output.manager.interface";

import type { ProductivityProcessor } from "../processors/productivity.processor";
import {
  buildProductivityContext,
} from "../context/productivity-context.builder";

export class DefaultProductivityService
  implements ProductivityService
{
  constructor(
    private readonly processor: ProductivityProcessor,
    private readonly outputManager: ProductivityOutputManager,
  ) {}

  async processRequest(
    request: ProductivityRequest,
  ) {
    const context =
      buildProductivityContext(request);

    const result =
      await this.processor.process(context);

    return this.outputManager.create(result);
  }
}