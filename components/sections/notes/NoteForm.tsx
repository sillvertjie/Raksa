"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/actions";
import { Input, Textarea } from "@/components/ui/forms";

import { useCreateNote } from "@/features/notes/hooks";

interface NoteFormProps {
  onCreated?: () => Promise<void> | void;
}

export default function NoteForm({
  onCreated,
}: NoteFormProps) {
  const { submit, loading, error } = useCreateNote();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    await submit({
      title,
      content,
    });

    setTitle("");
    setContent("");

    await onCreated?.();
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
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Note"}
      </Button>
    </form>
  );
}