import {
  PromptContract,
  PromptMetadata,
  PromptVariable,
} from "../contracts/prompt.interface";

export class PromptModel implements PromptContract {
  id: string;

  name: string;

  version: string;

  template: string;

  variables: PromptVariable[];

  metadata?: PromptMetadata;

  constructor(data: PromptContract) {
    this.id = data.id;
    this.name = data.name;
    this.version = data.version;
    this.template = data.template;
    this.variables = data.variables;
    this.metadata = data.metadata;
  }
}
