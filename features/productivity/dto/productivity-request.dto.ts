import { ProductivityAction } from "../contracts/productivity-request";

export interface ProductivityRequestDto {
  action: ProductivityAction;
  input: string;
  instruction?: string;
}