import { SummaryRepository } from "../repositories/summary.repository";

export class SummaryService {
  private repository =
    new SummaryRepository();

  async getSummary() {
    return this.repository.getSummary();
  }
}