import { auth } from "@/lib/auth";

import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

import {
  handleApiError,
  handleApiSuccess,
} from "@/lib/api/errors";

import { getQueryBus } from "@/features/shared/query-bus/query-bus.runtime";

import { SearchQuery } from "@/features/search/queries/search.queries";

import type { SearchIndexDocument } from "@/features/search/entities/search-index-document.entity";

import { DEFAULT_SEARCH_SCOPE } from "@/features/search/constants/search-scope.constant";


export async function POST(
  request: Request,
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new AppError(
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized.",
        401,
      );
    }

    const body =
      await request.json();


    const query =
      new SearchQuery(
        DEFAULT_SEARCH_SCOPE,
        body.query,
      );


    const result =
      await getQueryBus().execute<SearchIndexDocument[]>(
        query,
      );


    return handleApiSuccess(result);

  } catch (error) {
    return handleApiError(error);
  }
}