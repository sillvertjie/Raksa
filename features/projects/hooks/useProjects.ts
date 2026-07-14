"use client";

import { useCallback, useEffect, useState } from "react";

import {
  projectsApi,
  type ProjectResponse,
} from "../api/projects.api";

import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    setLoading(true);

    try {
      const data = await projectsApi.getAll();

      setProjects(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const createProject = useCallback(
    async (dto: CreateProjectDto) => {
      const project = await projectsApi.create(dto);

      setProjects((current) => [
        ...current,
        project,
      ]);

      return project;
    },
    [],
  );

  const updateProject = useCallback(
    async (
      id: string,
      dto: UpdateProjectDto,
    ) => {
      const updated =
        await projectsApi.update(id, dto);

      setProjects((current) =>
        current.map((project) =>
          project.id === id
            ? updated
            : project,
        ),
      );

      return updated;
    },
    [],
  );

  const deleteProject = useCallback(
    async (id: string) => {
      await projectsApi.delete(id);

      setProjects((current) =>
        current.filter(
          (project) => project.id !== id,
        ),
      );
    },
    [],
  );

  return {
    projects,
    loading,
    refresh: fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
}