export type ProductivityAction = "transform";

export interface ProductivityRequest {
  action: ProductivityAction;
  input: string;
  instruction?: string;
}