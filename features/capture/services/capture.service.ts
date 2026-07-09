import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";

import { CaptureRepository } from "../repositories/capture.repository";
import { validateCaptureContent } from "../validators/capture.validator";

export class CaptureService {
  constructor(
    private readonly repository = new CaptureRepository()
  ) {}

  async create(dto: CreateCaptureDTO) {
    const content = validateCaptureContent(dto.content);

    return this.repository.create(content);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(
    id: string,
    dto: UpdateCaptureDTO
  ) {
    if (!id.trim()) {
      throw new Error("Capture ID is required.");
    }

    const content = validateCaptureContent(dto.content);

    return this.repository.update(
      id,
      content
    );
  }

  async delete(id: string) {
    if (!id.trim()) {
      throw new Error("Capture ID is required.");
    }

    return this.repository.delete(id);
  }
}