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

  const [loading, setLoading] =
    useState(true);


  const fetchWorkspace =
    useCallback(async () => {
      setLoading(true);

      try {
        const data =
          await getWorkspace();

        setItems(data);

      } finally {
        setLoading(false);
      }
    }, []);


  useEffect(() => {
    fetchWorkspace();
  }, [fetchWorkspace]);


  return {
    items,
    loading,
    refresh: fetchWorkspace,
  };
}