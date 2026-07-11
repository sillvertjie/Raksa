import { ProductivityRequest } from "../contracts/productivity-request";

export interface ProductivityService {
  processRequest(
    request: ProductivityRequest,
  ): Promise<void>;
}