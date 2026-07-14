"use client";

import { useState } from "react";

import { advancedSearch } from "../api/advanced-search.api";

import type { SearchQueryDto } from "../dto/search-query.dto";

import type { SearchIndexDocument } from "../entities/search-index-document.entity";


export function useAdvancedSearch() {
  const [result, setResult] =
    useState<SearchIndexDocument[]>([]);


  const [loading, setLoading] =
    useState(false);


  const [error, setError] =
    useState<string | null>(null);


  async function search(
    dto: SearchQueryDto,
  ) {
    try {
      setLoading(true);
      setError(null);

      const data =
        await advancedSearch(dto);


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
    setResult([]);
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