"use client";

import { useState } from "react";

import {
  Button,
  Dialog,
  Textarea,
} from "@/components/ui";

import type { Capture } from "@/features/capture/types/capture";

interface CaptureItemProps {
  capture: Capture;

  updating?: boolean;
  deleting?: boolean;

  onDelete: (id: string) => Promise<void>;

  onSave: (
    id: string,
    content: string
  ) => Promise<void>;
}

export default function CaptureItem({
  capture,
  updating = false,
  deleting = false,
  onDelete,
  onSave,
}: CaptureItemProps) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [editedContent, setEditedContent] =
    useState(capture.content);

  const [error, setError] =
    useState<string | null>(null);

  const [showDeleteDialog, setShowDeleteDialog] =
    useState(false);

  function handleEdit() {
    setEditedContent(capture.content);
    setError(null);
    setIsEditing(true);
  }

  function handleCancel() {
    setEditedContent(capture.content);
    setError(null);
    setIsEditing(false);
  }

  async function handleSave() {
    if (updating) return;

    setError(null);

    try {
      await onSave(
        capture.id,
        editedContent
      );

      setIsEditing(false);
    } catch {
      setError(
        "Gagal menyimpan perubahan."
      );
    }
  }

  async function handleDeleteConfirm() {
    try {
      await onDelete(capture.id);

      setShowDeleteDialog(false);
    } catch {
      setError(
        "Gagal menghapus capture."
      );
    }
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      {isEditing ? (
        <Textarea
          rows={4}
          value={editedContent}
          onChange={(event) =>
            setEditedContent(
              event.target.value
            )
          }
          disabled={updating}
        />
      ) : (
        <p className="whitespace-pre-wrap">
          {capture.content}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

      <p className="mt-2 text-sm text-gray-500">
        {new Date(
          capture.createdAt
        ).toLocaleString()}
      </p>

      <div className="mt-4 flex gap-2">
        {isEditing ? (
          <>
            <Button
              onClick={handleSave}
              disabled={updating}
            >
              {updating
                ? "Saving..."
                : "Save"}
            </Button>

            <Button
              onClick={handleCancel}
              disabled={updating}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            onClick={handleEdit}
            disabled={deleting}
          >
            Edit
          </Button>
        )}

        <Button
          onClick={() =>
            setShowDeleteDialog(true)
          }
          disabled={deleting}
        >
          Delete
        </Button>
      </div>

      <Dialog
        open={showDeleteDialog}
        title="Delete Capture?"
        description="Data yang sudah dihapus tidak dapat dikembalikan."
        loading={deleting}
        onCancel={() =>
          setShowDeleteDialog(false)
        }
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}