"use client";

import { FormEvent, useState } from "react";

import {
  Button,
  ErrorMessage,
  Input,
  Textarea,
} from "@/components/ui";

interface NoteFormProps {
  onSubmit: (
    title: string,
    content: string
  ) => Promise<void>;

  loading: boolean;

  error: string | null;
}

export default function NoteForm({
  onSubmit,
  loading,
  error,
}: NoteFormProps) {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    await onSubmit(title, content);

    setTitle("");

    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border bg-white p-5 shadow-sm"
    >
      <Input
        placeholder="Title"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <Textarea
        placeholder="Write your note..."
        rows={6}
        value={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
      />

      {error && (
        <ErrorMessage message={error} />
      )}

      <Button
        type="submit"
        loading={loading}
        loadingText="Saving..."
      >
        Save Note
      </Button>
    </form>
  );
}