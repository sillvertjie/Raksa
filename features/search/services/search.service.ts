import type { SearchDTO } from "../dto/search.dto";
import { SearchRepository } from "../repositories/search.repository";
import { validateSearchDTO } from "../validators/search.validator";

export class SearchService {
  constructor(
    private readonly repository = new SearchRepository()
  ) {}

  async search(dto: SearchDTO) {
    const error = validateSearchDTO(dto);

    if (error) {
      throw new Error(error);
    }

    const query = dto.query.trim();

    return this.repository.search(query);
  }
}