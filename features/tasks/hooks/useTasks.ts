"use client";

import { useCallback, useEffect, useState } from "react";

import {
  tasksApi,
  type TaskResponse,
} from "../api/tasks.api";

import type { CreateTaskDto } from "../dto/create-task.dto";
import type { UpdateTaskDto } from "../dto/update-task.dto";

export function useTasks() {
  const [tasks, setTasks] =
    useState<TaskResponse[]>([]);

  const [loading, setLoading] =
    useState(true);


  const fetchTasks = useCallback(async () => {
    setLoading(true);

    try {
      const data =
        await tasksApi.getAll();

      setTasks(data);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);


  const createTask = useCallback(
    async (
      dto: CreateTaskDto,
    ) => {
      const task =
        await tasksApi.create(dto);

      setTasks((current) => [
        ...current,
        task,
      ]);

      return task;
    },
    [],
  );


  const updateTask = useCallback(
    async (
      id: string,
      dto: UpdateTaskDto,
    ) => {
      const updated =
        await tasksApi.update(
          id,
          dto,
        );

      setTasks((current) =>
        current.map((task) =>
          task.id === id
            ? updated
            : task,
        ),
      );

      return updated;
    },
    [],
  );


  const deleteTask = useCallback(
    async (
      id: string,
    ) => {
      await tasksApi.delete(id);

      setTasks((current) =>
        current.filter(
          (task) => task.id !== id,
        ),
      );
    },
    [],
  );


  return {
    tasks,
    loading,
    refresh: fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}