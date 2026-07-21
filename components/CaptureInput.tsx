"use client";

import { useState } from "react";

import { Button } from "@/components/ui";

interface CaptureInputProps {
  onCreate: (content: string) => Promise<void>;
  loading: boolean;
}

export default function CaptureInput({
  onCreate,
  loading,
}: CaptureInputProps) {
  const [content, setContent] = useState("");

  async function handleSubmit() {
    if (!content.trim()) return;

    await onCreate(content);

    setContent("");
  }

  return (
    <div className="space-y-3">
      <textarea
        className="
          w-full
          rounded-lg
          border
          border-raksa-border
          bg-raksa-surface
          p-3
          text-raksa-text-primary
          placeholder:text-raksa-text-secondary
          outline-none
          focus:ring-2
          focus:ring-raksa-primary
          disabled:opacity-50
        "
        rows={4}
        placeholder="Write something..."
        value={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
        disabled={loading}
      />

      <Button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}