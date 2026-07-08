"use client";

import { useState } from "react";

import {
  Button,
  Heading,
  Input,
  Text,
  Textarea,
} from "@/components/ui";

import { formatNoteDate } from "@/features/notes/utils/date";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;

  updating?: boolean;
  deleting?: boolean;

  onUpdate: (
    id: string,
    title: string,
    content: string
  ) => Promise<void>;

  onDelete: (id: string) => Promise<void>;
}

export default function NoteCard({
  id,
  title,
  content,
  createdAt,
  updatedAt,
  updating = false,
  deleting = false,
  onUpdate,
  onDelete,
}: NoteCardProps) {
  const [editing, setEditing] =
    useState(false);

  const [editTitle, setEditTitle] =
    useState(title);

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

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete this note?"
    );

    if (!confirmed) {
      return;
    }

    await onDelete(id);
  }

  function handleCancel() {
    setEditTitle(title);
    setEditContent(content);
    setEditing(false);
  }

  if (editing) {
    return (
      <article className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
        <Input
          value={editTitle}
          onChange={(event) =>
            setEditTitle(
              event.target.value
            )
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

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            onClick={handleCancel}
            disabled={updating}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleSave}
            loading={updating}
            loadingText="Saving..."
          >
            Save
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <Heading className="text-lg">
            {title}
          </Heading>

          <Text className="mt-2 whitespace-pre-wrap text-slate-600">
            {content}
          </Text>

          <div className="mt-4 space-y-1">
            <Text className="text-xs text-slate-500">
              Created • {formatNoteDate(createdAt)}
            </Text>

            {createdAt !== updatedAt && (
              <Text className="text-xs text-slate-500">
                Updated • {formatNoteDate(updatedAt)}
              </Text>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            onClick={() =>
              setEditing(true)
            }
            disabled={deleting}
          >
            Edit
          </Button>

          <Button
            type="button"
            onClick={handleDelete}
            loading={deleting}
            loadingText="Deleting..."
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
}