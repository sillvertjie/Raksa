import type { CreateKnowledgeDocumentDto } from "../dto/create-knowledge-document.dto";
import type { UpdateKnowledgeDocumentDto } from "../dto/update-knowledge-document.dto";
import type { CreateKnowledgeDocumentVersionDto } from "../dto/create-knowledge-document-version.dto";

import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";


export interface KnowledgeDocumentService {

  create(
    dto: CreateKnowledgeDocumentDto,
  ): Promise<KnowledgeDocumentEntity>;


  update(
    id: string,
    dto: UpdateKnowledgeDocumentDto,
  ): Promise<KnowledgeDocumentEntity>;


  getById(
    id: string,
  ): Promise<KnowledgeDocumentEntity | null>;


  getAll(): Promise<KnowledgeDocumentEntity[]>;


  createVersion(
    dto: CreateKnowledgeDocumentVersionDto,
  ): Promise<KnowledgeDocumentVersionEntity>;


  getHierarchy(): Promise<KnowledgeDocumentEntity[]>;

}