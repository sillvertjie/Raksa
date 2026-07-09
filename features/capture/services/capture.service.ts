import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";

import { AppError, ERROR_CODES } from "@/lib/errors";

import { CaptureRepository } from "../repositories/capture.repository";
import { validateCaptureContent } from "../validators/capture.validator";

export class CaptureService {
  constructor(
    private readonly repository = new CaptureRepository()
  ) {}

  async create(
    userId: string,
    dto: CreateCaptureDTO
  ) {
    const validatedData = {
      content: validateCaptureContent(dto.content),
    };

    return this.repository.create(
      userId,
      validatedData
    );
  }

  async findAll(
    userId: string
  ) {
    return this.repository.findAll(userId);
  }

  async update(
    id: string,
    userId: string,
    dto: UpdateCaptureDTO
  ) {
    if (!id.trim()) {
      throw new AppError(
        ERROR_CODES.VALIDATION_ERROR,
        "Capture ID is required.",
        400
      );
    }

    const validatedData = {
      content: validateCaptureContent(dto.content),
    };

    return this.repository.update(
      id,
      userId,
      validatedData
    );
  }

  async delete(
    id: string,
    userId: string
  ) {
    if (!id.trim()) {
      throw new AppError(
        ERROR_CODES.VALIDATION_ERROR,
        "Capture ID is required.",
        400
      );
    }

    return this.repository.delete(
      id,
      userId
    );
  }
}