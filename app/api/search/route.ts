import { auth } from "@/lib/auth";
import { AppError, ERROR_CODES } from "@/lib/errors";
import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

import { SearchService } from "@/features/search/services/search.service";

const service = new SearchService();

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401
      );
    }

    const body = await request.json();

    const result = await service.search(
      session.user.id,
      {
        query: body.query,
      }
    );

    return handleApiSuccess(result);
  } catch (error) {
    return handleApiError(error);
  }
}