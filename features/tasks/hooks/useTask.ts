"use client";

import { useCallback, useEffect, useState } from "react";

import {
  tasksApi,
  type TaskResponse,
} from "../api/tasks.api";


type Params = {
  id: string;
};


export function useTask({
  id,
}: Params) {
  const [task, setTask] =
    useState<TaskResponse | null>(null);

  const [loading, setLoading] =
    useState(true);


  const fetchTask = useCallback(
    async () => {
      setLoading(true);

      try {
        const data =
          await tasksApi.getById(id);

        setTask(data);
      } finally {
        setLoading(false);
      }
    },
    [id],
  );


  useEffect(() => {
    fetchTask();
  }, [fetchTask]);


  return {
    task,
    loading,
    refresh: fetchTask,
  };
}