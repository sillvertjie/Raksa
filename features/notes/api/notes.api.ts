import { apiFetch } from "@/lib/api/client";

import type { CreateNoteDTO } from "../dto/create-note.dto";
import type { UpdateNoteDTO } from "../dto/update-note.dto";
import type { Note } from "../types/note";

const API_URL = "/api/notes";

export function getNotes() {
  return apiFetch<Note[]>(API_URL);
}

export function getNote(id: string) {
  return apiFetch<Note>(
    `${API_URL}/${id}`
  );
}

export function createNote(
  dto: CreateNoteDTO
) {
  return apiFetch<Note>(API_URL, {
    method: "POST",
    body: JSON.stringify(dto),
  });
}

export function updateNote(
  id: string,
  dto: UpdateNoteDTO
) {
  return apiFetch<Note>(
    `${API_URL}/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(dto),
    }
  );
}

export function deleteNote(
  id: string
) {
  return apiFetch<Note>(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );
}