"use client";

import { useState } from "react";

import { searchAI } from "../api/search-ai.api";

import type { AISearchRequest } from "../contracts/ai-search-request";
import type { AISearchResponse } from "../contracts/ai-search-response";


export function useAISearch() {
  const [result, setResult] =
    useState<AISearchResponse | null>(null);


  const [loading, setLoading] =
    useState(false);


  const [error, setError] =
    useState<string | null>(null);


  async function search(
    request: AISearchRequest,
  ) {
    try {
      setLoading(true);
      setError(null);

      const response =
        await searchAI(request);

      setResult(response);

      return response;

    } catch (err) {

      const message =
        err instanceof Error
          ? err.message
          : "Failed to AI search.";

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