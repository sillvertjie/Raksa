"use client";

import { useState } from "react";

import { search as searchApi } from "../api/search.api";
import type { SearchDTO } from "../dto/search.dto";
import type { SearchResult } from "../types/search";

export function useSearch() {
  const [result, setResult] =
    useState<SearchResult | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function search(dto: SearchDTO) {
    try {
      setLoading(true);
      setError(null);

      const data = await searchApi(dto);

      setResult(data);

      return data;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to search.";

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setResult(null);
    setError(null);
  }

  return {
    result,

    loading,

    error,

    search,

    clear,
  };
}