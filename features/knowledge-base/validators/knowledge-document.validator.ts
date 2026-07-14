import type { CreateKnowledgeDocumentDto } from "../dto/create-knowledge-document.dto";
import type { UpdateKnowledgeDocumentDto } from "../dto/update-knowledge-document.dto";

export class KnowledgeDocumentValidator {
  static validateCreate(
    dto: CreateKnowledgeDocumentDto,
  ): void {
    if (!dto.workspaceId.trim()) {
      throw new Error("Workspace ID is required");
    }

    if (!dto.title.trim()) {
      throw new Error("Document title is required");
    }

    if (!dto.slug.trim()) {
      throw new Error("Document slug is required");
    }

    if (dto.content === undefined || dto.content === null) {
      throw new Error("Document content is required");
    }
  }

  static validateUpdate(
    dto: UpdateKnowledgeDocumentDto,
  ): void {
    if (dto.title !== undefined && !dto.title.trim()) {
      throw new Error("Document title cannot be empty");
    }

    if (dto.slug !== undefined && !dto.slug.trim()) {
      throw new Error("Document slug cannot be empty");
    }

    if (dto.content !== undefined && dto.content === null) {
      throw new Error("Document content cannot be null");
    }
  }
}