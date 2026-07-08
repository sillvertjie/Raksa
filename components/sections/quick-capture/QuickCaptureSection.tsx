"use client";

import { SectionTitle } from "@/components/ui";

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
      <SectionTitle className="mb-4">
        Quick Capture
      </SectionTitle>

      <CaptureInput
        onCreate={onCreate}
        loading={creating}
      />
    </section>
  );
}