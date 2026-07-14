import type { SearchServiceInterface } from "../contracts/search-service.interface";
import type { SearchRepositoryInterface } from "../contracts/search-repository.interface";
import type { SearchDTO } from "../dto/search.dto";
import { validateSearchDTO } from "../validators/search.validator";

export class SearchService implements SearchServiceInterface {
  constructor(
    private readonly repository: SearchRepositoryInterface
  ) {}

  async search(
    userId: string,
    dto: SearchDTO
  ) {
    const error = validateSearchDTO(dto);

    if (error) {
      throw new Error(error);
    }

    const query = dto.query.trim();

    return this.repository.search(
      userId,
      query
    );
  }
}