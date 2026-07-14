import { apiFetch } from "@/lib/api/client";

import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";

export type ProjectResponse = {
  id: string;
  name: string;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export const projectsApi = {
  async getAll(): Promise<ProjectResponse[]> {
    return apiFetch<ProjectResponse[]>(
      "/api/projects",
      {
        method: "GET",
      },
    );
  },

  async getById(
    id: string,
  ): Promise<ProjectResponse | null> {
    return apiFetch<ProjectResponse | null>(
      `/api/projects/${id}`,
      {
        method: "GET",
      },
    );
  },

  async create(
    dto: CreateProjectDto,
  ): Promise<ProjectResponse> {
    return apiFetch<ProjectResponse>(
      "/api/projects",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
    );
  },

  async update(
    id: string,
    dto: UpdateProjectDto,
  ): Promise<ProjectResponse> {
    return apiFetch<ProjectResponse>(
      `/api/projects/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(dto),
      },
    );
  },

  async delete(
    id: string,
  ): Promise<void> {
    await apiFetch<void>(
      `/api/projects/${id}`,
      {
        method: "DELETE",
      },
    );
  },
};