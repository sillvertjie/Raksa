import type {
  PromptRenderer,
  PromptRenderInput,
} from "@/ai/prompt/contracts/prompt-renderer.interface";

export class DefaultPromptRenderer
  implements PromptRenderer
{
  render(input: PromptRenderInput): string {
    let output = input.template;

    for (const [key, value] of Object.entries(
      input.variables,
    )) {
      output = output.replaceAll(
        `{{${key}}}`,
        value,
      );
    }

    return output;
  }
}