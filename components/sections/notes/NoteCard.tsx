"use client";

import { useState } from "react";

import { Button } from "@/components/ui/actions";
import { Input, Textarea } from "@/components/ui/forms";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  loading?: boolean;
  onUpdate: (
    id: string,
    title: string,
    content: string
  ) => Promise<void>;
}

export default function NoteCard({
  id,
  title,
  content,
  loading = false,
  onUpdate,
}: NoteCardProps) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] =
    useState(content);

  async function handleSave() {
    if (
      !editTitle.trim() ||
      !editContent.trim()
    ) {
      return;
    }

    await onUpdate(
      id,
      editTitle,
      editContent
    );

    setEditing(false);
  }

  function handleCancel() {
    setEditTitle(title);
    setEditContent(content);
    setEditing(false);
  }

  if (editing) {
    return (
      <article className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <Input
          value={editTitle}
          onChange={(event) =>
            setEditTitle(event.target.value)
          }
        />

        <Textarea
          rows={6}
          value={editContent}
          onChange={(event) =>
            setEditContent(
              event.target.value
            )
          }
        />

        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>

          <Button
            type="button"
            disabled={loading}
            onClick={handleSave}
          >
            {loading
              ? "Saving..."
              : "Save"}
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">
            {content}
          </p>
        </div>

        <Button
          type="button"
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
      </div>
    </article>
  );
}