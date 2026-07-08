"use client";

import { useEffect, useState } from "react";

import {
  createCapture as createCaptureApi,
  deleteCapture as deleteCaptureApi,
  getCaptures,
  updateCapture as updateCaptureApi,
} from "../api/capture.api";

import type { CreateCaptureDTO } from "../dto/create-capture.dto";
import type { UpdateCaptureDTO } from "../dto/update-capture.dto";
import type { Capture } from "../types/capture";

export function useCaptures() {
  const [captures, setCaptures] = useState<Capture[]>([]);

  const [loading, setLoading] = useState(true);

  const [creating, setCreating] = useState(false);

  const [updatingId, setUpdatingId] =
    useState<string | null>(null);

  const [deletingId, setDeletingId] =
    useState<string | null>(null);

  const [error, setError] =
    useState<string | null>(null);

  async function loadCaptures() {
    try {
      setLoading(true);
      setError(null);

      const data = await getCaptures();

      setCaptures(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to load captures."
      );
    } finally {
      setLoading(false);
    }
  }

  async function createCapture(
    dto: CreateCaptureDTO
  ) {
    try {
      setCreating(true);
      setError(null);

      const capture =
        await createCaptureApi(dto);

      setCaptures((prev) => [
        capture,
        ...prev,
      ]);

      return capture;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to create capture.";

      setError(message);

      throw error;
    } finally {
      setCreating(false);
    }
  }

  async function updateCapture(
    id: string,
    dto: UpdateCaptureDTO
  ) {
    try {
      setUpdatingId(id);
      setError(null);

      const updated =
        await updateCaptureApi(
          id,
          dto
        );

      setCaptures((prev) =>
        prev.map((capture) =>
          capture.id === id
            ? updated
            : capture
        )
      );

      return updated;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to update capture.";

      setError(message);

      throw error;
    } finally {
      setUpdatingId(null);
    }
  }

  async function deleteCapture(id: string) {
    try {
      setDeletingId(id);
      setError(null);

      await deleteCaptureApi(id);

      setCaptures((prev) =>
        prev.filter(
          (capture) =>
            capture.id !== id
        )
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to delete capture.";

      setError(message);

      throw error;
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    void loadCaptures();
  }, []);

  return {
    captures,

    loading,
    creating,

    updatingId,
    deletingId,

    error,

    refresh: loadCaptures,

    createCapture,
    updateCapture,
    deleteCapture,
  };
}