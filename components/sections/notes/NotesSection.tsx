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
  ) => Promise<Note>;

  onUpdate: (
    id: string,
    dto: UpdateNoteDTO
  ) => Promise<Note>;

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
        onSubmit={async (
          title,
          content
        ) => {
          await onCreate({
            title,
            content,
          });
        }}
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
          onUpdate={async (
            id,
            title,
            content
          ) => {
            await onUpdate(id, {
              title,
              content,
            });
          }}
          onDelete={onDelete}
        />
      )}
    </section>
  );
}