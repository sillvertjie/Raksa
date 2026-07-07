"use client";

import { useRef } from "react";

import CaptureInput from "@/components/CaptureInput";
import CaptureList, {
  CaptureListRef,
} from "@/components/CaptureList";

export default function CaptureSection() {
  const captureListRef = useRef<CaptureListRef>(null);

  function handleCreated() {
    captureListRef.current?.refresh();
  }

  return (
    <section className="mt-10">
      <CaptureInput
        onCreated={handleCreated}
      />

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">
          Recent Captures
        </h2>

        <CaptureList
          ref={captureListRef}
        />
      </div>
    </section>
  );
}