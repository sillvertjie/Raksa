"use client";

import { useNotes } from "@/features/notes/hooks";

import NotesSection from "./NotesSection";

export default function NotesPageClient() {
  const {
    notes,
    loading,
    creating,
    updatingId,
    deletingId,
    error,
    createNote,
    updateNote,
    deleteNote,
  } = useNotes();

  return (
    <NotesSection
      notes={notes}
      loading={loading}
      creating={creating}
      updatingId={updatingId}
      deletingId={deletingId}
      error={error}
      onCreate={createNote}
      onUpdate={updateNote}
      onDelete={deleteNote}
    />
  );
}