import { useEffect, useState } from "react";

import { getNotes } from "../api/notes.api";
import { Note } from "../types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadNotes() {
    try {
      setLoading(true);
      setError(null);

      const data = await getNotes();

      setNotes(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load notes."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadNotes();
  }, []);

  return {
    notes,
    loading,
    error,
    refresh: loadNotes,
  };
}