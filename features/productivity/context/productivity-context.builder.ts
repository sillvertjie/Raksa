import { ProductivityRequest } from "../contracts/productivity-request";

export interface ProductivityContext {
  action: string;
  input: string;
  instruction?: string;
}

export function buildProductivityContext(
  request: ProductivityRequest,
): ProductivityContext {
  return {
    action: request.action,
    input: request.input,
    instruction: request.instruction,
  };
}