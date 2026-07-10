import { auth } from "@/lib/auth";
import { SummaryService } from "@/features/summary/services/summary.service";

import { AppError, ERROR_CODES } from "@/lib/errors";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

const service = new SummaryService();

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401
      );
    }

    const summary = await service.getSummary(
      session.user.id
    );

    return handleApiSuccess(summary);
  } catch (error) {
    return handleApiError(error);
  }
}