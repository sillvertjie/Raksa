export interface NoteAssistantContextInput {
  noteTitle: string;
  noteContent: string;
}

export interface NoteAssistantContext {
  content: string;
}

export class NoteAssistantContextBuilder {
  build(
    input: NoteAssistantContextInput,
  ): NoteAssistantContext {
    return {
      content: `
Title:
${input.noteTitle}

Content:
${input.noteContent}
      `.trim(),
    };
  }
}