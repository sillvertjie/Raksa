import { useEffect, useState } from "react";

import {
  createNote as createNoteApi,
  getNotes,
  updateNote as updateNoteApi,
} from "../api/notes.api";
import { CreateNoteDTO } from "../dto/create-note.dto";
import { UpdateNoteDTO } from "../dto/update-note.dto";
import { Note } from "../types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);
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

  async function updateNote(
    id: string,
    dto: UpdateNoteDTO
  ) {
    try {
      setUpdating(true);
      setError(null);

      const updated = await updateNoteApi(id, dto);

      setNotes((prev) =>
        prev.map((note) =>
          note.id === id ? updated : note
        )
      );

      return updated;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to update note.";

      setError(message);
      throw err;
    } finally {
      setUpdating(false);
    }
  }

  useEffect(() => {
    void loadNotes();
  }, []);

  return {
    notes,
    loading,
    creating,
    updating,
    error,
    refresh: loadNotes,
    createNote,
    updateNote,
  };
}