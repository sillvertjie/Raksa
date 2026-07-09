import { SummaryRepository } from "../repositories/summary.repository";

export class SummaryService {
  constructor(
    private readonly repository = new SummaryRepository()
  ) {}

  async getSummary() {
    return this.repository.getSummary();
  }
}