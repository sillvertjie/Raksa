"use client";

import { useState } from "react";

import { generateContent } from "../api/content-generation.api";

import type { ContentGenerationDto } from "../dto/content-generation.dto";
import type { ContentGenerationResponse } from "../contracts/content-generation-response";


export function useContentGeneration() {
  const [result, setResult] =
    useState<ContentGenerationResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);


  async function generate(
    dto: ContentGenerationDto,
  ) {
    try {
      setLoading(true);
      setError(null);

      const response =
        await generateContent(dto);

      setResult(response);

      return response;

    } catch (err) {

      const message =
        err instanceof Error
          ? err.message
          : "Failed to generate content.";

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
    generate,
    clear,
  };
}