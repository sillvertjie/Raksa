"use client";

import { useState } from "react";

import { Button, Dialog, Textarea } from "@/components/ui";
import type { Capture } from "@/features/capture/types/capture";

interface CaptureItemProps {
  capture: Capture;
  onDelete: (id: string) => void;
  onSave: (id: string, content: string) => Promise<void>;
}

export default function CaptureItem({
  capture,
  onDelete,
  onSave,
}: CaptureItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(capture.content);

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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
    if (isSaving) return;

    setIsSaving(true);
    setError(null);

    try {
      await onSave(capture.id, editedContent);
      setIsEditing(false);
    } catch {
      setError("Gagal menyimpan perubahan.");
    } finally {
      setIsSaving(false);
    }
  }

  function handleDeleteConfirm() {
    onDelete(capture.id);
    setShowDeleteDialog(false);
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      {isEditing ? (
        <Textarea
          rows={4}
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          disabled={isSaving}
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
        {new Date(capture.createdAt).toLocaleString()}
      </p>

      <div className="mt-4 flex gap-2">
        {isEditing ? (
          <>
            <Button
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </Button>

            <Button
              onClick={handleCancel}
              disabled={isSaving}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={handleEdit}>
            Edit
          </Button>
        )}

        <Button
          onClick={() => setShowDeleteDialog(true)}
          disabled={isSaving}
        >
          Delete
        </Button>
      </div>

      <Dialog
        open={showDeleteDialog}
        title="Delete Capture?"
        description="Data yang sudah dihapus tidak dapat dikembalikan."
        onCancel={() => setShowDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}