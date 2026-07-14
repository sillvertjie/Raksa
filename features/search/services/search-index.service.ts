import type { SearchIndexRepository } from "../contracts/search-index.repository.interface";
import type { SearchIndexDocument } from "../entities/search-index-document.entity";

export class SearchIndexService {
  constructor(
    private readonly repository: SearchIndexRepository,
  ) {}

  async index(
    document: SearchIndexDocument,
  ): Promise<void> {
    await this.repository.upsert(document);
  }

  async remove(
    id: string,
  ): Promise<void> {
    await this.repository.remove(id);
  }
}