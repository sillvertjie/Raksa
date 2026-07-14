"use client";

import { useCallback, useEffect, useState } from "react";

import {
  projectsApi,
  type ProjectResponse,
} from "../api/projects.api";

type Params = {
  id: string;
};

export function useProject({
  id,
}: Params) {
  const [project, setProject] =
    useState<ProjectResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const fetchProject = useCallback(
    async () => {
      setLoading(true);

      try {
        const data =
          await projectsApi.getById(id);

        setProject(data);
      } finally {
        setLoading(false);
      }
    },
    [id],
  );

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return {
    project,
    loading,
    refresh: fetchProject,
  };
}