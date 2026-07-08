"use client";

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
    updating,
    error,
    createNote,
    updateNote,
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && notes.length === 0) {
    return <p>{error}</p>;
  }

  return (
    <section className="space-y-6">
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
          updating={updating}
          onUpdate={handleUpdateNote}
        />
      )}
    </section>
  );
}