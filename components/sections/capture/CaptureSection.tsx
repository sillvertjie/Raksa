"use client";

import CaptureList from "@/components/CaptureList";

import type { Capture } from "@/features/capture/types/capture";

interface CaptureSectionProps {
  captures: Capture[];
  loading: boolean;
  error: string | null;
  updatingId: string | null;
  deletingId: string | null;
  onDelete: (id: string) => Promise<void>;
  onSave: (id: string, content: string) => Promise<void>;
}

export default function CaptureSection({
  captures,
  loading,
  error,
  updatingId,
  deletingId,
  onDelete,
  onSave,
}: CaptureSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold">
        Recent Captures
      </h2>

      <CaptureList
        captures={captures}
        loading={loading}
        error={error}
        updatingId={updatingId}
        deletingId={deletingId}
        onDelete={onDelete}
        onSave={onSave}
      />
    </section>
  );
}