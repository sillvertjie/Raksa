import type { KnowledgeDocumentRepository } from "../contracts/knowledge-document.repository.contract";
import type { KnowledgeDocumentService } from "../contracts/knowledge-document.service.interface";

import type { CreateKnowledgeDocumentDto } from "../dto/create-knowledge-document.dto";
import type { UpdateKnowledgeDocumentDto } from "../dto/update-knowledge-document.dto";
import type { CreateKnowledgeDocumentVersionDto } from "../dto/create-knowledge-document-version.dto";

import type { KnowledgeDocumentEntity } from "../entities/knowledge-document.entity";
import type { KnowledgeDocumentVersionEntity } from "../entities/knowledge-document-version.entity";

import { KnowledgeDocumentValidator } from "../validators/knowledge-document.validator";


export class DefaultKnowledgeDocumentService
  implements KnowledgeDocumentService {

  constructor(
    private readonly repository: KnowledgeDocumentRepository,
  ) {}


  async create(
    dto: CreateKnowledgeDocumentDto,
  ): Promise<KnowledgeDocumentEntity> {

    KnowledgeDocumentValidator.validateCreate(dto);

    const document =
      await this.repository.create(dto);


    await this.repository.createVersion({
      documentId: document.id,
      content: {},
    });


    return document;
  }


  async update(
    id: string,
    dto: UpdateKnowledgeDocumentDto,
  ): Promise<KnowledgeDocumentEntity> {

    KnowledgeDocumentValidator.validateUpdate(dto);


    const document =
      await this.repository.findById(id);


    if (!document) {
      throw new Error("Knowledge document not found.");
    }


    return this.repository.update(id, dto);
  }


  async getById(
    id: string,
  ): Promise<KnowledgeDocumentEntity | null> {

    return this.repository.findById(id);
  }


  async getAll(): Promise<KnowledgeDocumentEntity[]> {

    return this.repository.findAll();
  }


  async createVersion(
    dto: CreateKnowledgeDocumentVersionDto,
  ): Promise<KnowledgeDocumentVersionEntity> {

    return this.repository.createVersion(dto);
  }


  async getHierarchy(): Promise<KnowledgeDocumentEntity[]> {

    return this.repository.findHierarchy();
  }

}