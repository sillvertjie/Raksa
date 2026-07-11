import type { ProductivityRequest } from "../contracts/productivity-request";
import type { ProductivityOutput } from "../output/contracts/productivity-output.manager.interface";

export interface ProductivityService {
  processRequest(
    request: ProductivityRequest,
  ): Promise<ProductivityOutput>;
}