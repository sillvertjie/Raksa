export interface ProductivityOutput {
  output: string;
}

export interface ProductivityOutputManager {
  create(
    output: string,
  ): ProductivityOutput;
}