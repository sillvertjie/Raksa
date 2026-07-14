"use client";

import { useState } from "react";

import type { CreateProjectDto } from "../dto/create-project.dto";

type Props = {
  onSubmit: (
    dto: CreateProjectDto,
  ) => Promise<void>;
};

export function ProjectCreateForm({
  onSubmit,
}: Props) {
  const [name, setName] = useState("");

  async function handleSubmit(
    event: React.FormEvent,
  ) {
    event.preventDefault();

    await onSubmit({
      name,
    });

    setName("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        placeholder="Project name"
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