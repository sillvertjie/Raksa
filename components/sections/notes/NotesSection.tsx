"use client";

import {
  ErrorMessage,
  Loading,
} from "@/components/ui";

import type { CreateNoteDTO } from "@/features/notes/dto/create-note.dto";
import type { UpdateNoteDTO } from "@/features/notes/dto/update-note.dto";
import type { Note } from "@/features/notes/types/note";

import EmptyNotes from "./EmptyNotes";
import NoteForm from "./NoteForm";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

interface NotesSectionProps {
  notes: Note[];

  loading: boolean;
  creating: boolean;

  updatingId: string | null;
  deletingId: string | null;

  error: string | null;

  onCreate: (
    dto: CreateNoteDTO
  ) => Promise<void>;

  onUpdate: (
    id: string,
    dto: UpdateNoteDTO
  ) => Promise<void>;

  onDelete: (
    id: string
  ) => Promise<void>;
}

export default function NotesSection({
  notes,
  loading,
  creating,
  updatingId,
  deletingId,
  error,
  onCreate,
  onUpdate,
  onDelete,
}: NotesSectionProps) {

  async function handleCreateNote(
    title: string,
    content: string
  ) {
    await onCreate({
      title,
      content,
    });
  }

  async function handleUpdateNote(
    id: string,
    title: string,
    content: string
  ) {
    await onUpdate(id, {
      title,
      content,
    });
  }

  async function handleDeleteNote(
    id: string
  ) {
    await onDelete(id);
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