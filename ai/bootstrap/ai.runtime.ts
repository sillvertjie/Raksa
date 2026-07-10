import { createAIBootstrap } from "./ai.bootstrap";

import { DefaultPromptRenderer } from "@/ai/prompt";

const promptRenderer = new DefaultPromptRenderer();

export const aiRuntime = createAIBootstrap({
  promptRenderer,
});