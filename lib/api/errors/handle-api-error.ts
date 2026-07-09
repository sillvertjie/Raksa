import { NextResponse } from "next/server";

import {
  AppError,
  ERROR_CODES,
} from "@/lib/errors";

export function handleApiError(error: unknown) {
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      },
      {
        status: error.statusCode,
      }
    );
  }

  console.error(error);

  return NextResponse.json(
    {
      success: false,
      error: {
        code: ERROR_CODES.INTERNAL_ERROR,
        message: "Internal server error.",
      },
    },
    {
      status: 500,
    }
  );
}