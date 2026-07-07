"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import CaptureItem from "./CaptureItem";
import {
  EmptyState,
  ErrorMessage,
  Loading,
} from "@/components/ui";
import type { Capture } from "@/features/capture/types/capture";

export interface CaptureListRef {
  refresh: () => Promise<void>;
}

const CaptureList = forwardRef<CaptureListRef>((_, ref) => {
  const [captures, setCaptures] = useState<Capture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/capture");

      if (!response.ok) {
        throw new Error("Failed to fetch captures");
      }

      const data: Capture[] = await response.json();

      setCaptures(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load captures.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(`/api/capture/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete capture");
        }

        await refresh();
      } catch (error) {
        console.error(error);
        setError("Failed to delete capture.");
      }
    },
    [refresh]
  );

  const handleUpdate = useCallback(
    async (id: string, content: string) => {
      try {
        const response = await fetch(`/api/capture/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update capture");
        }

        await refresh();
      } catch (error) {
        console.error(error);
        setError("Failed to update capture.");
      }
    },
    [refresh]
  );

  useImperativeHandle(ref, () => ({
    refresh,
  }));

  useEffect(() => {
    refresh();
  }, [refresh]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (captures.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {captures.map((capture) => (
        <CaptureItem
          key={capture.id}
          capture={capture}
          onDelete={handleDelete}
          onSave={handleUpdate}
        />
      ))}
    </div>
  );
});

CaptureList.displayName = "CaptureList";

export default CaptureList;
