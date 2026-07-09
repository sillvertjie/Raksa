"use client";

import { SearchSection } from "@/features/search/components";

import { useCaptures } from "@/features/capture/hooks";
import { useNotes } from "@/features/notes/hooks";

import {
  CaptureSection,
  FutureModulesSection,
  HeaderSection,
  NotesSection,
  SummarySection,
  QuickCaptureSection,
} from "@/components/sections";

export default function DashboardClient() {
  const {
    captures,
    loading: capturesLoading,
    creating,
    updatingId,
    deletingId,
    error: capturesError,
    createCapture,
    updateCapture,
    deleteCapture,
  } = useCaptures();

  const {
    notes,
    loading: notesLoading,
    creating: notesCreating,
    updatingId: notesUpdatingId,
    deletingId: notesDeletingId,
    error: notesError,
    createNote,
    updateNote,
    deleteNote,
  } = useNotes();

  return (
    <>
      <HeaderSection />

      <SummarySection />

      <SearchSection />

      <QuickCaptureSection
        creating={creating}
        onCreate={async (content) => {
          await createCapture({
            content,
          });
        }}
      />

      <CaptureSection
        captures={captures}
        loading={capturesLoading}
        error={capturesError}
        updatingId={updatingId}
        deletingId={deletingId}
        onDelete={deleteCapture}
        onSave={async (id, content) => {
          await updateCapture(id, {
            content,
          });
        }}
      />

      <NotesSection
        notes={notes}
        loading={notesLoading}
        creating={notesCreating}
        updatingId={notesUpdatingId}
        deletingId={notesDeletingId}
        error={notesError}
        onCreate={createNote}
        onUpdate={updateNote}
        onDelete={deleteNote}
      />

      <FutureModulesSection />
    </>
  );
}