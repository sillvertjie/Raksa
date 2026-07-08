"use client";

import {
  ErrorMessage,
  Loading,
} from "@/components/ui";

import { useNotes } from "@/features/notes/hooks";

import EmptyNotes from "./EmptyNotes";
import NoteForm from "./NoteForm";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

export default function NotesSection() {
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

  async function handleCreateNote(
    title: string,
    content: string
  ) {
    await createNote({
      title,
      content,
    });
  }

  async function handleUpdateNote(
    id: string,
    title: string,
    content: string
  ) {
    await updateNote(id, {
      title,
      content,
    });
  }

  async function handleDeleteNote(id: string) {
    await deleteNote(id);
  }

  if (loading) {
    return <Loading />;
  }

  if (error && notes.length === 0) {
    return (
      <ErrorMessage
        message={error}
      />
    );
  }

  return (
    <section className="mt-10 space-y-6">
      <NotesHeader />

      <NoteForm
        onSubmit={handleCreateNote}
        loading={creating}
        error={error}
      />

      {notes.length === 0 ? (
        <EmptyNotes />
      ) : (
        <NotesList
          notes={notes}
          updatingId={updatingId}
          deletingId={deletingId}
          onUpdate={handleUpdateNote}
          onDelete={handleDeleteNote}
        />
      )}
    </section>
  );
}