import { useEffect, useState } from "react";

import { getSummary } from "../api/summary.api";
import type { Summary } from "../types/summary";

export function useSummary() {
  const [summary, setSummary] =
    useState<Summary | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  async function loadSummary() {
    try {
      setLoading(true);
      setError(null);

      const data = await getSummary();

      setSummary(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to load summary."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadSummary();
  }, []);

  return {
    summary,
    loading,
    error,
    refresh: loadSummary,
  };
}