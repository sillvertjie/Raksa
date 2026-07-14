import { apiFetch } from "@/lib/api/client";

import type { CreateTaskDto } from "../dto/create-task.dto";
import type { UpdateTaskDto } from "../dto/update-task.dto";


export type TaskResponse = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  projectId: string | null;
  createdAt: string;
  updatedAt: string;
};


export const tasksApi = {
  async getAll(): Promise<TaskResponse[]> {
    return apiFetch<TaskResponse[]>(
      "/api/tasks",
      {
        method: "GET",
      },
    );
  },


  async getById(
    id: string,
  ): Promise<TaskResponse | null> {
    return apiFetch<TaskResponse | null>(
      `/api/tasks/${id}`,
      {
        method: "GET",
      },
    );
  },


  async create(
    dto: CreateTaskDto,
  ): Promise<TaskResponse> {
    return apiFetch<TaskResponse>(
      "/api/tasks",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
    );
  },


  async update(
    id: string,
    dto: UpdateTaskDto,
  ): Promise<TaskResponse> {
    return apiFetch<TaskResponse>(
      `/api/tasks/${id}`,
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
      `/api/tasks/${id}`,
      {
        method: "DELETE",
      },
    );
  },
};