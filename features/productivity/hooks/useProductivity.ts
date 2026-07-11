import { useState } from "react";

import type { ProductivityRequestDto } from "../dto/productivity-request.dto";
import type { ProductivityOutput } from "../output/contracts/productivity-output.manager.interface";

import { processProductivity } from "../api/productivity.api";

export function useProductivity() {
  const [data, setData] =
    useState<ProductivityOutput | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function process(
    dto: ProductivityRequestDto,
  ) {
    setLoading(true);

    try {
      const response =
        await processProductivity(dto);

      setData(response);

      return response;
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    process,
  };
}