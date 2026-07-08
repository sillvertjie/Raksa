"use client";

import { SearchSection } from "@/features/search/components";

import { useCaptures } from "@/features/capture/hooks";

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
    loading,
    creating,
    updatingId,
    deletingId,
    error,
    createCapture,
    updateCapture,
    deleteCapture,
  } = useCaptures();

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
        loading={loading}
        error={error}
        updatingId={updatingId}
        deletingId={deletingId}
        onDelete={deleteCapture}
        onSave={async (id, content) => {
          await updateCapture(id, {
            content,
          });
        }}
      />

      <NotesSection />

      <FutureModulesSection />
    </>
  );
}