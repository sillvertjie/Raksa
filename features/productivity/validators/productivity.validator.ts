import { ProductivityRequestDto } from "../dto/productivity-request.dto";

export function validateProductivityRequest(
  request: ProductivityRequestDto,
): boolean {
  if (!request.action) {
    return false;
  }

  if (!request.input || request.input.trim().length === 0) {
    return false;
  }

  return true;
}