import { PrismaLegacySearchRepository } from "../repositories/prisma-legacy-search.repository";
import { SearchService } from "../services/search.service";

const repository = new PrismaLegacySearchRepository();

export const searchService = new SearchService(repository);