import {
  ProductivityOutput,
  ProductivityOutputManager,
} from "../contracts/productivity-output.manager.interface";

export class DefaultProductivityOutputManager
  implements ProductivityOutputManager
{
  create(
    output: string,
  ): ProductivityOutput {
    return {
      output,
    };
  }
}