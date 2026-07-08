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
    error,
    refresh,
  } = useNotes();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="space-y-6">
      <NotesHeader />

      <NoteForm onCreated={refresh} />

      {notes.length === 0 ? (
        <EmptyNotes />
      ) : (
        <NotesList notes={notes} />
      )}
    </section>
  );
}