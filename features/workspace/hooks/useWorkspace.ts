"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { getWorkspace } from "../api/workspace.client";

import type { WorkspaceItem } from "../entities/workspace-item.entity";


export function useWorkspace() {
  const [items, setItems] =
    useState<WorkspaceItem[]>([]);

  const [nextCursor, setNextCursor] =
    useState<string | undefined>();

  const [loading, setLoading] =
    useState(true);


  const fetchWorkspace =
    useCallback(async () => {
      setLoading(true);

      try {
        const data =
          await getWorkspace(
            "default",
          );

        setItems(
          data.items,
        );

        setNextCursor(
          data.nextCursor,
        );

      } finally {
        setLoading(false);
      }
    }, []);


  useEffect(() => {
    fetchWorkspace();
  }, [fetchWorkspace]);


  return {
    items,
    nextCursor,
    loading,
    refresh: fetchWorkspace,
  };
}