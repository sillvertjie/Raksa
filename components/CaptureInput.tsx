"use client";

import { useState } from "react";
import { Button,  } from "@/components/ui";

interface CaptureInputProps {
  onCreated?: () => void;
}

export default function CaptureInput({ onCreated }: CaptureInputProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!content.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to create capture");
      }

      setContent("");
      onCreated?.();
    } catch (error) {
      console.error(error);
      alert("Failed to save capture.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <textarea
        className="w-full rounded-lg border p-3"
        rows={4}
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}