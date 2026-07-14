"use client";

import { useState } from "react";

import type { CreateTaskDto } from "../dto/create-task.dto";


type Props = {
  onSubmit: (
    dto: CreateTaskDto,
  ) => Promise<void>;
};


export function TaskCreateForm({
  onSubmit,
}: Props) {
  const [title, setTitle] =
    useState("");

  async function handleSubmit(
    event: React.FormEvent,
  ) {
    event.preventDefault();

    await onSubmit({
      title,
    });

    setTitle("");
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        placeholder="Task title"
        className="border px-3 py-2"
      />

      <button
        type="submit"
        className="border px-3 py-2"
      >
        Create
      </button>
    </form>
  );
}