"use client";

import CaptureInput from "@/components/CaptureInput";
import CaptureList from "@/components/CaptureList";

import { useCaptures } from "@/features/capture/hooks";

export default function CaptureSection() {
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
    <section className="mt-10">
      <CaptureInput
        onCreate={async (content) => {
          await createCapture({
            content,
          });
        }}
        loading={creating}
      />

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">
          Recent Captures
        </h2>

        <CaptureList
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
      </div>
    </section>
  );
}