import { useState } from "react";

import { createNote } from "../api/notes.api";
import { CreateNoteDTO } from "../dto/create-note.dto";

export function useCreateNote() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(dto: CreateNoteDTO) {
    try {
      setLoading(true);
      setError(null);

      const note = await createNote(dto);

      return note;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to create note.";

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    submit,
    loading,
    error,
  };
}