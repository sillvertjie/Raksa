export interface PromptVariable {
  name: string;
  description?: string;
  required: boolean;
}

export interface PromptMetadata {
  createdAt?: Date;
  updatedAt?: Date;
  tags?: string[];
}

export interface PromptContract {
  id: string;

  name: string;

  version: string;

  template: string;

  variables: PromptVariable[];

  metadata?: PromptMetadata;
}
