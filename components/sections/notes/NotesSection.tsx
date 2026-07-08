"use client";

import { useNotes } from "@/features/notes/hooks/useNotes";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";
import EmptyNotes from "./EmptyNotes";

export default function NotesSection() {
  const {
    notes,
    loading,
    error,
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

      {notes.length === 0 ? (
        <EmptyNotes />
      ) : (
        <NotesList notes={notes} />
      )}
    </section>
  );
}