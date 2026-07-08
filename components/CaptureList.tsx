"use client";

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
} from "react";

import CaptureItem from "./CaptureItem";

import {
  EmptyState,
  ErrorMessage,
  Loading,
} from "@/components/ui";

import type { Capture } from "@/features/capture/types/capture";

interface CaptureListProps {
  captures: Capture[];
  loading: boolean;
  error: string | null;

  updatingId: string | null;
  deletingId: string | null;

  onDelete: (id: string) => Promise<void>;

  onSave: (
    id: string,
    content: string
  ) => Promise<void>;
}

export interface CaptureListRef {
  refresh: () => Promise<void>;
}

const CaptureList = forwardRef<
  CaptureListRef,
  CaptureListProps
>(
  (
    {
      captures,
      loading,
      error,
      updatingId,
      deletingId,
      onDelete,
      onSave,
    },
    ref
  ) => {
    const refresh = useCallback(async () => {
      return;
    }, []);

    useImperativeHandle(ref, () => ({
      refresh,
    }));

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <ErrorMessage message={error} />
      );
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
            updating={
              updatingId === capture.id
            }
            deleting={
              deletingId === capture.id
            }
            onDelete={onDelete}
            onSave={onSave}
          />
        ))}
      </div>
    );
  }
);

CaptureList.displayName = "CaptureList";

export default CaptureList;