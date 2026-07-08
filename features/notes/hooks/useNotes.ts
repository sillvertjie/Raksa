import { useEffect, useState } from "react";

import {
  createNote as createNoteApi,
  getNotes,
} from "../api/notes.api";
import { CreateNoteDTO } from "../dto/create-note.dto";
import { Note } from "../types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
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

  async function createNote(dto: CreateNoteDTO) {
    try {
      setCreating(true);
      setError(null);

      const note = await createNoteApi(dto);

      setNotes((prev) => [note, ...prev]);

      return note;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to create note.";

      setError(message);

      throw err;
    } finally {
      setCreating(false);
    }
  }

  useEffect(() => {
    void loadNotes();
  }, []);

  return {
    notes,
    loading,
    creating,
    error,
    refresh: loadNotes,
    createNote,
  };
}