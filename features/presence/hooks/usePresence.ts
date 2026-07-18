"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { presenceApi } from "../api/presence.client";

import type { PresenceResponseDto } from "../dto/presence-response.dto";

export function usePresence() {
  const [presence, setPresence] =
    useState<
      PresenceResponseDto[]
    >([]);

  const [loading, setLoading] =
    useState(true);

  const refresh =
    useCallback(async () => {
      setLoading(true);

      try {
        const result =
          await presenceApi.getWorkspacePresence();

        setPresence(result);
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    presence,
    loading,
    refresh,
  };
}