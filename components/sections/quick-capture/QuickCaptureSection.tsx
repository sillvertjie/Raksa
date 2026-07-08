"use client";

import CaptureInput from "@/components/CaptureInput";

interface QuickCaptureSectionProps {
  creating: boolean;
  onCreate: (content: string) => Promise<void>;
}

export default function QuickCaptureSection({
  creating,
  onCreate,
}: QuickCaptureSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold">
        Quick Capture
      </h2>

      <CaptureInput
        onCreate={onCreate}
        loading={creating}
      />
    </section>
  );
}